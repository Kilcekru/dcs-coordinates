import { Grid, MapName } from "../types";
import caucasus from "./grid-caucasus.json";
import normandy from "./grid-normandy.json";
import persianGulf from "./grid-persianGulf.json";
import sinai from "./grid-sinai.json";
import southAtlantic from "./grid-southAtlantic.json";
import syria from "./grid-syria.json";

export const data: Record<MapName, Grid> = {
	caucasus: caucasus as Grid,
	normandy: normandy as Grid,
	persianGulf: persianGulf as Grid,
	sinai: sinai as Grid,
	southAtlantic: southAtlantic as Grid,
	syria: syria as Grid,
};
