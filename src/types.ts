import { z } from "zod";

export const latLngSchema = z.object({ lat: z.number(), lng: z.number() });
export type LatLng = z.TypeOf<typeof latLngSchema>;

export const dcsCoordsSchema = z.object({ x: z.number(), z: z.number() });
export type DcsCoords = z.TypeOf<typeof dcsCoordsSchema>;

export const theatreSchema = z.enum(["Caucasus", "Normandy", "PersianGulf", "Sinai", "SouthAtlantic", "Syria"]);
export type Theatre = z.TypeOf<typeof theatreSchema>;

export const LOtoLLArgsSchema = dcsCoordsSchema.extend({
	theatre: theatreSchema,
});
export type LOtoLLArgs = z.TypeOf<typeof LOtoLLArgsSchema>;

export const LLtoLOArgsSchema = latLngSchema.extend({
	theatre: theatreSchema,
});
export type LLtoLOArgs = z.TypeOf<typeof LLtoLOArgsSchema>;

export const dmsSchema = z.object({ deg: z.number(), min: z.number(), sec: z.number() });
export type DMS = z.TypeOf<typeof dmsSchema>;
