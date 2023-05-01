import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../../src";

describe("persianGulf", () => {
	test("accuracy", () => {
		expect.assertions(32314);
		for (let x = -285_000; x <= 465_000; x += 5000) {
			for (let z = -365_000; z <= 165_000; z += 5000) {
				const { lat, lng } = LOtoLL({ map: "persianGulf", x, z });
				const res = LLtoLO({ map: "persianGulf", lat, lng });
				expect(Math.abs(res.x - x)).toBeLessThan(3);
				expect(Math.abs(res.z - z)).toBeLessThan(3);
			}
		}
	});
});
