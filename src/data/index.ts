import { Grid, MapName } from "../types";
import caucasus from "./grid-caucasus.json";
import normandy from "./grid-normandy.json";
import syria from "./grid-syria.json";

export const data: Record<MapName, Grid> = {
	caucasus: caucasus as Grid,
	normandy: normandy as Grid,
	syria: syria as Grid,
};
