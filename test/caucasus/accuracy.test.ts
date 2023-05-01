import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../../src";

describe("caucasus", () => {
	test("accuracy", () => {
		for (let x = -395_000; x <= 45_000; x += 5000) {
			for (let z = 205_000; z <= 925_000; z += 5000) {
				const { lat, lng } = LOtoLL({ map: "caucasus", x, z });
				const res = LLtoLO({ map: "caucasus", lat, lng });
				expect(Math.abs(res.x - x)).toBeLessThan(3);
				expect(Math.abs(res.z - z)).toBeLessThan(3);
			}
		}
	});
});
