import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../../src";

describe("caucasus", () => {
	test("accuracy", () => {
		expect.assertions(37400);
		for (let x = -450_000; x < 100_000; x += 5000) {
			for (let z = 150_000; z < 1_000_000; z += 5000) {
				const { lat, lng } = LOtoLL({ map: "caucasus", x, z });
				const res = LLtoLO({ map: "caucasus", lat, lng });
				expect(Math.abs(res.x - x)).toBeLessThan(3);
				expect(Math.abs(res.z - z)).toBeLessThan(3);
			}
		}
	});
});
