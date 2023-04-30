import caucasus from "./grid-caucasus.json";
import normandy from "./grid-normandy.json";

export const data: Record<string, Grid> = {
	caucasus: caucasus as unknown as Grid,
	normandy: normandy as unknown as Grid,
};

type Grid = Record<string, Record<string, [number, number]>>;
