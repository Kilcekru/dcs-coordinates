import { data } from "./data";
import { bilinearInterpolation } from "./math";
import { DcsCoords, LatLng, MapName } from "./types";

/**
 * Converts DCS coordinates to Lat / Lng
 */
export function LOtoLL({ map, x, z }: MapName & DcsCoords): LatLng {
	const grid = data[map];
	if (grid == undefined) {
		throw new Error("Invalid map name");
	}

	const gridX = Math.floor(x / 10000);
	const gridZ = Math.floor(z / 10000);
	const v11 = grid[gridX]?.[gridZ];
	const v12 = grid[gridX]?.[gridZ + 1];
	const v21 = grid[gridX + 1]?.[gridZ];
	const v22 = grid[gridX + 1]?.[gridZ + 1];

	if (v11 == undefined || v12 == undefined || v21 == undefined || v22 == undefined) {
		throw new Error(`Coordinates outside of acceptable area for ${map}`);
	}

	const lat = bilinearInterpolation({
		x,
		x1: 10000 * gridX,
		x2: 10000 * (gridX + 1),
		y: z,
		y1: 10000 * gridZ,
		y2: 10000 * (gridZ + 1),
		v11: v11[0],
		v12: v12[0],
		v21: v21[0],
		v22: v22[0],
	});

	const lng = bilinearInterpolation({
		x,
		x1: 10000 * gridX,
		x2: 10000 * (gridX + 1),
		y: z,
		y1: 10000 * gridZ,
		y2: 10000 * (gridZ + 1),
		v11: v11[1],
		v12: v12[1],
		v21: v21[1],
		v22: v22[1],
	});

	return { lat, lng };
}

/**
 * Converts Lat / Long to DCS coordinates
 */
export function LLtoLO(_args: MapName & LatLng): DcsCoords {
	throw new Error("Not yet implemented");
}
