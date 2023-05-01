export interface LatLng {
	lat: number;
	lng: number;
}

export interface DcsCoords {
	x: number;
	z: number;
}

export type MapName = "caucasus" | "normandy" | "syria";

export type Grid = {
	minX: number;
	minZ: number;
	minLat: number;
	minLng: number;
	lo: Array<Array<[number, number]>>;
	ll: Array<Array<[number, number]>>;
};
