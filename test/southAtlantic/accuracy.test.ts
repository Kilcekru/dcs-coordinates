import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../../src";

describe("southAtlantic", () => {
	test("accuracy", () => {
		expect.assertions(88400);
		for (let x = -500_000; x < 350_000; x += 5000) {
			for (let z = -1_100_000; z < 200_000; z += 5000) {
				const { lat, lng } = LOtoLL({ map: "southAtlantic", x, z });
				const res = LLtoLO({ map: "southAtlantic", lat, lng });
				expect(Math.abs(res.x - x)).toBeLessThan(4);
				expect(Math.abs(res.z - z)).toBeLessThan(4);
			}
		}
	});
});
