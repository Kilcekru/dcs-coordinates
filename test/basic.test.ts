import { describe, expect, test } from "@jest/globals";
import { ValidationError } from "zod-validation-error";

import { LLtoLO, LOtoLL } from "../src";
import { LLtoLOArgs, LOtoLLArgs, Theatre } from "../src/types";

describe("basic", () => {
	test("LOtoLL - Missing args", () => {
		// invalid cast to LOtoLLArgs
		const args = {} as LOtoLLArgs;
		const exp = expect(() => LOtoLL(args));
		exp.toThrow(ValidationError);
		exp.toThrow(new Error('LOtoLL - Invalid args: Required at "x"; Required at "z"; Required at "theatre"'));
	});

	test("LOtoLL - Invalid theatre", () => {
		// invalid cast to Theatre
		const theatre = "asd" as Theatre;
		const exp = expect(() => LOtoLL({ theatre, x: 0, z: 0 }));
		exp.toThrow(ValidationError);
		exp.toThrow(
			new Error(
				`LOtoLL - Invalid args: Invalid enum value. Expected 'Caucasus' | 'Normandy' | 'PersianGulf' | 'Sinai' | 'SouthAtlantic' | 'Syria', received 'asd' at "theatre"`
			)
		);
	});

	test("LOtoLL - Invalid coords", () => {
		// invalid cast to LOtoLLArgs
		const args = { theatre: "Caucasus", x: "", z: "" } as unknown as LOtoLLArgs;
		const exp = expect(() => LOtoLL(args));
		exp.toThrow(ValidationError);
		exp.toThrow(
			new Error(
				'LOtoLL - Invalid args: Expected number, received string at "x"; Expected number, received string at "z"'
			)
		);
	});

	test("LLtoLO - Missing args", () => {
		// invalid cast to LLtoLOArgs
		const args = {} as LLtoLOArgs;
		const exp = expect(() => LLtoLO(args));
		exp.toThrow(ValidationError);
		exp.toThrow(new Error('LLtoLO - Invalid args: Required at "lat"; Required at "lng"; Required at "theatre"'));
	});

	test("LLtoLO - Invalid theatre", () => {
		// invalid cast to Theatre
		const theatre = "asd" as Theatre;
		const exp = expect(() => LLtoLO({ theatre, lat: 0, lng: 0 }));
		exp.toThrow(ValidationError);
		exp.toThrow(
			new Error(
				"LLtoLO - Invalid args: Invalid enum value. Expected 'Caucasus' | 'Normandy' | 'PersianGulf' | 'Sinai' | 'SouthAtlantic' | 'Syria', received 'asd' at \"theatre\""
			)
		);
	});

	test("LLtoLO - Invalid coords", () => {
		// invalid cast to LLtoLOArgs
		const args = { theatre: "Caucasus", lat: "", lng: "" } as unknown as LLtoLOArgs;
		const exp = expect(() => LLtoLO(args));
		exp.toThrow(ValidationError);
		exp.toThrow(
			new Error(
				'LLtoLO - Invalid args: Expected number, received string at "lat"; Expected number, received string at "lng"'
			)
		);
	});
});
