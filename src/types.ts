export interface LatLng {
	lat: number;
	lng: number;
}

export interface DcsCoords {
	x: number;
	z: number;
}

export type MapName = "caucasus" | "normandy" | "persianGulf" | "sinai" | "southAtlantic" | "syria";

export type Grid = {
	bounds: {
		latMax: number;
		latMin: number;
		lngMax: number;
		lngMin: number;
		xMax: number;
		xMin: number;
		zMax: number;
		zMin: number;
	};
	lo: Array<Array<[number, number]>>;
	ll: Array<Array<[number, number]>>;
};
