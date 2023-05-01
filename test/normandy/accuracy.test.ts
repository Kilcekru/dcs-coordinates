import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../../src";

describe("normandy", () => {
	test("accuracy", () => {
		expect.assertions(10950);
		for (let x = -125_000; x <= 245_000; x += 5000) {
			for (let z = -145_000; z <= 215_000; z += 5000) {
				const { lat, lng } = LOtoLL({ map: "normandy", x, z });
				const res = LLtoLO({ map: "normandy", lat, lng });
				expect(Math.abs(res.x - x)).toBeLessThan(3);
				expect(Math.abs(res.z - z)).toBeLessThan(3);
			}
		}
	});
});
