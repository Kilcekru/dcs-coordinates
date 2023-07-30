import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../../src";

describe("sinai", () => {
	test("accuracy", () => {
		expect.assertions(28768);
		for (let x = -250_000; x < 330_000; x += 5000) {
			for (let z = -150_000; z < 470_000; z += 5000) {
				const { lat, lng } = LOtoLL({ map: "sinai", x, z });
				const res = LLtoLO({ map: "sinai", lat, lng });
				expect(Math.abs(res.x - x)).toBeLessThan(3);
				expect(Math.abs(res.z - z)).toBeLessThan(3);
			}
		}
	});
});
