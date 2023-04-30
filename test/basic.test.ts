import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../src";
import { MapName } from "../src/types";

describe("basic", () => {
	test("Invalid map name LOtoLL", () => {
		// invalid cast to MapName
		const map = "asd" as MapName;
		expect(() => LOtoLL({ map, x: 0, z: 0 })).toThrow(new Error("Invalid map name"));
	});

	test("Invalid map name LLtoLO", () => {
		// invalid cast to MapName
		const map = "asd" as MapName;
		expect(() => LLtoLO({ map, lat: 0, lng: 0 })).toThrow(new Error("Invalid map name"));
	});
});
