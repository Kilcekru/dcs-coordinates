import { DcsCoords, LatLng, MapName } from "./types";

/**
 * Converts DCS coordinates to Lat / Lng
 */
export function LOtoLL(_args: MapName & DcsCoords): LatLng {
	throw new Error("Not yet implemented");
}

/**
 * Converts Lat / Long to DCS coordinates
 */
export function LLtoLO(_args: MapName & LatLng): DcsCoords {
	throw new Error("Not yet implemented");
}
