import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../../src";

describe("southAtlantic", () => {
	test("accuracy", () => {
		expect.assertions(87542);
		for (let x = -495_000; x <= 345_000; x += 5000) {
			for (let z = -1_095_000; z <= 195_000; z += 5000) {
				const { lat, lng } = LOtoLL({ map: "southAtlantic", x, z });
				const res = LLtoLO({ map: "southAtlantic", lat, lng });
				expect(Math.abs(res.x - x)).toBeLessThan(4);
				expect(Math.abs(res.z - z)).toBeLessThan(4);
			}
		}
	});
});
