import { Theatre } from "../types";
import Caucasus from "./grid-caucasus.json";
import Normandy from "./grid-normandy.json";
import PersianGulf from "./grid-persianGulf.json";
import Sinai from "./grid-sinai.json";
import SouthAtlantic from "./grid-southAtlantic.json";
import Syria from "./grid-syria.json";

export const data: Record<Theatre, Grid> = {
	Caucasus: Caucasus as Grid,
	Normandy: Normandy as Grid,
	PersianGulf: PersianGulf as Grid,
	Sinai: Sinai as Grid,
	SouthAtlantic: SouthAtlantic as Grid,
	Syria: Syria as Grid,
};

type Grid = {
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
