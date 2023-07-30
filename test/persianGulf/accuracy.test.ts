import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../../src";

describe("persianGulf", () => {
	test("accuracy", () => {
		expect.assertions(51520);
		for (let x = -370_000; x < 550_000; x += 5000) {
			for (let z = -450_000; z < 250_000; z += 5000) {
				const { lat, lng } = LOtoLL({ map: "persianGulf", x, z });
				const res = LLtoLO({ map: "persianGulf", lat, lng });
				expect(Math.abs(res.x - x)).toBeLessThan(3);
				expect(Math.abs(res.z - z)).toBeLessThan(3);
			}
		}
	});
});
