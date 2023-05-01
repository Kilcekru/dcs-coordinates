import { describe, expect, test } from "@jest/globals";

import { LLtoLO, LOtoLL } from "../../src";

describe("syria", () => {
	test("accuracy", () => {
		expect.assertions(33930);
		for (let x = -305_000; x <= 275_000; x += 5000) {
			for (let z = -325_000; z <= 395_000; z += 5000) {
				const { lat, lng } = LOtoLL({ map: "syria", x, z });
				const res = LLtoLO({ map: "syria", lat, lng });
				expect(Math.abs(res.x - x)).toBeLessThan(3);
				expect(Math.abs(res.z - z)).toBeLessThan(3);
			}
		}
	});
});
