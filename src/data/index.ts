import { Grid, MapName } from "../types";
import caucasus from "./grid-caucasus.json";
import normandy from "./grid-normandy.json";

export const data: Record<MapName, Grid> = {
	caucasus: caucasus as unknown as Grid,
	normandy: normandy as unknown as Grid,
};
