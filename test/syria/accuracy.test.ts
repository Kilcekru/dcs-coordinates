import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../../src";

describe("Syria", () => {
	test("accuracy", () => {
		expect.assertions(44720);
		for (let x = -340_000; x < 310_000; x += 5000) {
			for (let z = -410_000; z < 450_000; z += 5000) {
				const { lat, lng } = LOtoLL({ theatre: "Syria", x, z });
				const res = LLtoLO({ theatre: "Syria", lat, lng });
				expect(Math.abs(res.x - x)).toBeLessThan(3);
				expect(Math.abs(res.z - z)).toBeLessThan(3);
			}
		}
	});
});
