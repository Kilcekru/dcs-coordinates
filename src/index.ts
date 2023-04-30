import { data } from "./data";
import { bilinearInterpolation } from "./math";
import { DcsCoords, LatLng, MapName } from "./types";

/**
 * Converts DCS coordinates to Lat / Lng
 */
export function LOtoLL({ map, x, z }: { map: MapName } & DcsCoords): LatLng {
	const grid = data[map];
	if (grid == undefined) {
		throw new Error("Invalid map name");
	}

	const gridX = Math.floor(x / 10000);
	const gridZ = Math.floor(z / 10000);
	const gridXIndex = gridX - grid.minX;
	const gridZIndex = gridZ - grid.minZ;

	const v11 = grid.lo[gridXIndex]?.[gridZIndex];
	const v12 = grid.lo[gridXIndex]?.[gridZIndex + 1];
	const v21 = grid.lo[gridXIndex + 1]?.[gridZIndex];
	const v22 = grid.lo[gridXIndex + 1]?.[gridZIndex + 1];

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
export function LLtoLO({ map, lat, lng }: { map: MapName } & LatLng): DcsCoords {
	const grid = data[map];
	if (grid == undefined) {
		throw new Error("Invalid map name");
	}

	const gridLat = Math.floor(lat * 10);
	const gridLng = Math.floor(lng * 10);
	const gridLatIndex = gridLat - grid.minLat;
	const gridLngIndex = gridLng - grid.minLng;

	const v11 = grid.ll[gridLatIndex]?.[gridLngIndex];
	const v12 = grid.ll[gridLatIndex]?.[gridLngIndex + 1];
	const v21 = grid.ll[gridLatIndex + 1]?.[gridLngIndex];
	const v22 = grid.ll[gridLatIndex + 1]?.[gridLngIndex + 1];

	if (v11 == undefined || v12 == undefined || v21 == undefined || v22 == undefined) {
		throw new Error(`Coordinates outside of acceptable area for ${map}`);
	}

	const x = bilinearInterpolation({
		x: lat,
		x1: gridLat / 10,
		x2: (gridLat + 1) / 10,
		y: lng,
		y1: gridLng / 10,
		y2: (gridLng + 1) / 10,
		v11: v11[0],
		v12: v12[0],
		v21: v21[0],
		v22: v22[0],
	});

	const z = bilinearInterpolation({
		x: lat,
		x1: gridLat / 10,
		x2: (gridLat + 1) / 10,
		y: lng,
		y1: gridLng / 10,
		y2: (gridLng + 1) / 10,
		v11: v11[1],
		v12: v12[1],
		v21: v21[1],
		v22: v22[1],
	});

	return { x, z };
}
