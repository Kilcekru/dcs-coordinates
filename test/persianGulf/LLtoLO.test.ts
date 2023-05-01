import { describe, expect, test } from "@jest/globals";

import { LLtoLO } from "../../src";

describe("persianGulf", () => {
	describe("LLtoLO", () => {
		test("lat too small", () => {
			expect(() => LLtoLO({ map: "persianGulf", lat: 23.3999, lng: 55 })).toThrow(
				new Error("Coordinates outside of acceptable area for persianGulf")
			);
		});

		test("lat too big", () => {
			expect(() => LLtoLO({ map: "persianGulf", lat: 30.5, lng: 55 })).toThrow(
				new Error("Coordinates outside of acceptable area for persianGulf")
			);
		});

		test("lng too small", () => {
			expect(() => LLtoLO({ map: "persianGulf", lat: 27, lng: 52.2999 })).toThrow(
				new Error("Coordinates outside of acceptable area for persianGulf")
			);
		});

		test("lng too big", () => {
			expect(() => LLtoLO({ map: "persianGulf", lat: 27, lng: 58 })).toThrow(
				new Error("Coordinates outside of acceptable area for persianGulf")
			);
		});

		test("corner NE", () => {
			const { x, z } = LLtoLO({ map: "persianGulf", lat: 30.4999, lng: 57.9999 });
			expect(x).toBeCloseTo(479_673, 0);
			expect(z).toBeCloseTo(171_710, 0);
		});

		test("corner SE", () => {
			const { x, z } = LLtoLO({ map: "persianGulf", lat: 23.4, lng: 57.9999 });
			expect(x).toBeCloseTo(-306_778, 0);
			expect(z).toBeCloseTo(177_927, 0);
		});

		test("corner SW", () => {
			const { x, z } = LLtoLO({ map: "persianGulf", lat: 23.4, lng: 52.3 });
			expect(x).toBeCloseTo(-299_292, 0);
			expect(z).toBeCloseTo(-404_848, 0);
		});

		test("corner NW", () => {
			const { x, z } = LLtoLO({ map: "persianGulf", lat: 30.4999, lng: 52.3 });
			expect(x).toBeCloseTo(488_655, 0);
			expect(z).toBeCloseTo(-375_505, 0);
		});

		test("Shiraz", () => {
			const { x, z } = LLtoLO({ map: "persianGulf", lat: 29.5407, lng: 52.5916 });
			expect(x).toBeCloseTo(381_076, 0);
			expect(z).toBeCloseTo(-351_586, 0);
		});

		test("Havadarya", () => {
			const { x, z } = LLtoLO({ map: "persianGulf", lat: 27.15818, lng: 56.17182 });
			expect(x).toBeCloseTo(109_293, 0);
			expect(z).toBeCloseTo(-6_298, 0);
		});

		test("Al-Bateen", () => {
			const { x, z } = LLtoLO({ map: "persianGulf", lat: 24.42805, lng: 54.4586 });
			expect(x).toBeCloseTo(-190_949, 0);
			expect(z).toBeCloseTo(-181_926, 0);
		});
	});
});
