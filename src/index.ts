import { fromZodError } from "zod-validation-error";

import { data } from "./data";
import { bilinearInterpolation } from "./math";
import { DcsCoords, LatLng, LLtoLOArgs, LLtoLOArgsSchema, LOtoLLArgs, LOtoLLArgsSchema } from "./types";

export * as Types from "./types";
export * from "./utils";

/**
 * Converts DCS coordinates to Lat / Lng (decimal)
 *
 * @param theatre Name of the theatre the coordinates are on
 * @param x x coordinate of the point to convert
 * @param z z coordinate of the point to convert
 *
 * @returns Latitude and Longitude
 */
export function LOtoLL(args: LOtoLLArgs): LatLng {
	const parsed = LOtoLLArgsSchema.safeParse(args);
	if (!parsed.success) {
		throw fromZodError(parsed.error, { prefix: "LOtoLL - Invalid args" });
	}
	const grid = data[args.theatre];

	const gridX = Math.floor(args.x / 10000);
	const gridZ = Math.floor(args.z / 10000);
	const gridXIndex = gridX - grid.bounds.xMin;
	const gridZIndex = gridZ - grid.bounds.zMin;

	const v11 = grid.lo[gridXIndex]?.[gridZIndex];
	const v12 = grid.lo[gridXIndex]?.[gridZIndex + 1];
	const v21 = grid.lo[gridXIndex + 1]?.[gridZIndex];
	const v22 = grid.lo[gridXIndex + 1]?.[gridZIndex + 1];

	if (v11 == undefined || v12 == undefined || v21 == undefined || v22 == undefined) {
		throw new Error(`Coordinates outside of acceptable area for theatre ${args.theatre}`);
	}

	const lat = bilinearInterpolation({
		x: args.x,
		x1: 10000 * gridX,
		x2: 10000 * (gridX + 1),
		y: args.z,
		y1: 10000 * gridZ,
		y2: 10000 * (gridZ + 1),
		v11: v11[0],
		v12: v12[0],
		v21: v21[0],
		v22: v22[0],
	});

	const lng = bilinearInterpolation({
		x: args.x,
		x1: 10000 * gridX,
		x2: 10000 * (gridX + 1),
		y: args.z,
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
 * Converts Lat / Long (decimal) to DCS coordinates
 *
 * @param theatre Name of the theatre the coordinates are on
 * @param lat Latitude of the coordinates to convert
 * @param lng Longitude of the coordinates to convert
 *
 * @returns x and z coordinates
 */
export function LLtoLO(args: LLtoLOArgs): DcsCoords {
	const parsed = LLtoLOArgsSchema.safeParse(args);
	if (!parsed.success) {
		throw fromZodError(parsed.error, { prefix: "LLtoLO - Invalid args" });
	}
	const grid = data[args.theatre];

	const gridLat = Math.floor(args.lat * 10);
	const gridLng = Math.floor(args.lng * 10);
	const gridLatIndex = gridLat - grid.bounds.latMin;
	const gridLngIndex = gridLng - grid.bounds.lngMin;

	const v11 = grid.ll[gridLatIndex]?.[gridLngIndex];
	const v12 = grid.ll[gridLatIndex]?.[gridLngIndex + 1];
	const v21 = grid.ll[gridLatIndex + 1]?.[gridLngIndex];
	const v22 = grid.ll[gridLatIndex + 1]?.[gridLngIndex + 1];

	if (v11 == undefined || v12 == undefined || v21 == undefined || v22 == undefined) {
		throw new Error(`Coordinates outside of acceptable area for theatre ${args.theatre}`);
	}

	const x = bilinearInterpolation({
		x: args.lat,
		x1: gridLat / 10,
		x2: (gridLat + 1) / 10,
		y: args.lng,
		y1: gridLng / 10,
		y2: (gridLng + 1) / 10,
		v11: v11[0],
		v12: v12[0],
		v21: v21[0],
		v22: v22[0],
	});

	const z = bilinearInterpolation({
		x: args.lat,
		x1: gridLat / 10,
		x2: (gridLat + 1) / 10,
		y: args.lng,
		y1: gridLng / 10,
		y2: (gridLng + 1) / 10,
		v11: v11[1],
		v12: v12[1],
		v21: v21[1],
		v22: v22[1],
	});

	return { x, z };
}
