import { describe, expect, test } from "@jest/globals";

import { LOtoLL } from "../src";
import { MapName } from "../src/types";

describe("basic", () => {
	test("Invalid map name", () => {
		const map = "asd" as unknown as MapName["map"];
		expect(() => LOtoLL({ map, x: 0, z: 0 })).toThrow(new Error("Invalid map name"));
	});
});
