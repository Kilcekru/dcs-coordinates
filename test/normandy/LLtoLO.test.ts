import { describe, expect, test } from "@jest/globals";

import { LLtoLO } from "../../src";

describe("normandy", () => {
	describe("LLtoLO", () => {
		test("lat too small", () => {
			expect(() => LLtoLO({ map: "normandy", lat: 48.1999, lng: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for normandy")
			);
		});

		test("lat too big", () => {
			expect(() => LLtoLO({ map: "normandy", lat: 51.8, lng: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for normandy")
			);
		});

		test("lng too small", () => {
			expect(() => LLtoLO({ map: "normandy", lat: 50, lng: -2.4001 })).toThrow(
				new Error("Coordinates outside of acceptable area for normandy")
			);
		});

		test("lng too big", () => {
			expect(() => LLtoLO({ map: "normandy", lat: 50, lng: 3 })).toThrow(
				new Error("Coordinates outside of acceptable area for normandy")
			);
		});

		test("corner NE", () => {
			const { x, z } = LLtoLO({ map: "normandy", lat: 51.7999, lng: 2.9999 });
			expect(x).toBeCloseTo(271_013, 0);
			expect(z).toBeCloseTo(218_026, 0);
		});

		test("corner SE", () => {
			const { x, z } = LLtoLO({ map: "normandy", lat: 48.2, lng: 2.9999 });
			expect(x).toBeCloseTo(-128_854.5, 0);
			expect(z).toBeCloseTo(250_216, 0);
		});

		test("corner SW", () => {
			const { x, z } = LLtoLO({ map: "normandy", lat: 48.2, lng: -2.4 });
			expect(x).toBeCloseTo(-146_109, 0);
			expect(z).toBeCloseTo(-150_942, 0);
		});

		test("corner NW", () => {
			const { x, z } = LLtoLO({ map: "normandy", lat: 51.7999, lng: -2.4 });
			expect(x).toBeCloseTo(254_140, 0);
			expect(z).toBeCloseTo(-154_153, 0);
		});

		test("Odiham", () => {
			const { x, z } = LLtoLO({ map: "normandy", lat: 51.23441, lng: -0.94175 });
			expect(x).toBeCloseTo(193_094, 0);
			expect(z).toBeCloseTo(-51_835, 0);
		});

		test("Conches", () => {
			const { x, z } = LLtoLO({ map: "normandy", lat: 48.93496, lng: 0.96153 });
			expect(x).toBeCloseTo(-57_019, 0);
			expect(z).toBeCloseTo(94_576, 0);
		});

		test("Meautis", () => {
			const { x, z } = LLtoLO({ map: "normandy", lat: 49.2832, lng: -1.29981 });
			expect(x).toBeCloseTo(-24_484, 0);
			expect(z).toBeCloseTo(-71_879, 0);
		});
	});
});
