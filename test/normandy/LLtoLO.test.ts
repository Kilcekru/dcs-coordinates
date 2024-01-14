import { describe, expect, test } from "@jest/globals";

import { LLtoLO } from "../../src";

describe("Normandy", () => {
	describe("LLtoLO", () => {
		test("lat too small", () => {
			expect(() => LLtoLO({ theatre: "Normandy", lat: 48.0999, lng: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Normandy")
			);
		});

		test("lat too big", () => {
			expect(() => LLtoLO({ theatre: "Normandy", lat: 51.8, lng: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Normandy")
			);
		});

		test("lng too small", () => {
			expect(() => LLtoLO({ theatre: "Normandy", lat: 50, lng: -3.1001 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Normandy")
			);
		});

		test("lng too big", () => {
			expect(() => LLtoLO({ theatre: "Normandy", lat: 50, lng: 3.5 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Normandy")
			);
		});

		test("corner NE", () => {
			const { x, z } = LLtoLO({ theatre: "Normandy", lat: 51.7999, lng: 3.4999 });
			expect(x).toBeCloseTo(273_977, 0);
			expect(z).toBeCloseTo(252_455, 0);
		});

		test("corner SE", () => {
			const { x, z } = LLtoLO({ theatre: "Normandy", lat: 48.1, lng: 3.4999 });
			expect(x).toBeCloseTo(-136_931, 0);
			expect(z).toBeCloseTo(288_287, 0);
		});

		test("corner SW", () => {
			const { x, z } = LLtoLO({ theatre: "Normandy", lat: 48.1, lng: -3.1 });
			expect(x).toBeCloseTo(-157_393, 0);
			expect(z).toBeCloseTo(-202_971, 0);
		});

		test("corner NW", () => {
			const { x, z } = LLtoLO({ theatre: "Normandy", lat: 51.7999, lng: -3.1 });
			expect(x).toBeCloseTo(253_975, 0);
			expect(z).toBeCloseTo(-202_422, 0);
		});

		test("Odiham", () => {
			const { x, z } = LLtoLO({ theatre: "Normandy", lat: 51.23441, lng: -0.94175 });
			expect(x).toBeCloseTo(193_094, 0);
			expect(z).toBeCloseTo(-51_835, 0);
		});

		test("Conches", () => {
			const { x, z } = LLtoLO({ theatre: "Normandy", lat: 48.93496, lng: 0.96153 });
			expect(x).toBeCloseTo(-57_019, 0);
			expect(z).toBeCloseTo(94_576, 0);
		});

		test("Meautis", () => {
			const { x, z } = LLtoLO({ theatre: "Normandy", lat: 49.2832, lng: -1.29981 });
			expect(x).toBeCloseTo(-24_484, 0);
			expect(z).toBeCloseTo(-71_879, 0);
		});
	});
});
