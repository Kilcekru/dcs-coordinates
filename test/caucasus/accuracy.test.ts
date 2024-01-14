import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../../src";

describe("Caucasus", () => {
	test("accuracy", () => {
		expect.assertions(37400);
		for (let x = -450_000; x < 100_000; x += 5000) {
			for (let z = 150_000; z < 1_000_000; z += 5000) {
				const { lat, lng } = LOtoLL({ theatre: "Caucasus", x, z });
				const res = LLtoLO({ theatre: "Caucasus", lat, lng });
				expect(Math.abs(res.x - x)).toBeLessThan(3);
				expect(Math.abs(res.z - z)).toBeLessThan(3);
			}
		}
	});
});
