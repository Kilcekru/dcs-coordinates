import { describe, expect, test } from "@jest/globals";

import { LLtoLO } from "../../src";

describe("southAtlantic", () => {
	describe("LLtoLO", () => {
		test("lat too small", () => {
			expect(() => LLtoLO({ map: "southAtlantic", lat: -57.0001, lng: -65 })).toThrow(
				new Error("Coordinates outside of acceptable area for southAtlantic")
			);
		});

		test("lat too big", () => {
			expect(() => LLtoLO({ map: "southAtlantic", lat: -48.1, lng: -65 })).toThrow(
				new Error("Coordinates outside of acceptable area for southAtlantic")
			);
		});

		test("lng too small", () => {
			expect(() => LLtoLO({ map: "southAtlantic", lat: -52, lng: -76.9001 })).toThrow(
				new Error("Coordinates outside of acceptable area for southAtlantic")
			);
		});

		test("lng too big", () => {
			expect(() => LLtoLO({ map: "southAtlantic", lat: -52, lng: -56.1 })).toThrow(
				new Error("Coordinates outside of acceptable area for southAtlantic")
			);
		});

		test("corner NE", () => {
			const { x, z } = LLtoLO({ map: "southAtlantic", lat: -48.1001, lng: -56.1001 });
			expect(x).toBeCloseTo(487_599, 0);
			expect(z).toBeCloseTo(214_638, 0);
		});

		test("corner SE", () => {
			const { x, z } = LLtoLO({ map: "southAtlantic", lat: -57, lng: -56.1001 });
			expect(x).toBeCloseTo(-502_329, 0);
			expect(z).toBeCloseTo(202_306, 0);
		});

		test("corner SW", () => {
			const { x, z } = LLtoLO({ map: "southAtlantic", lat: -57, lng: -76.9 });
			expect(x).toBeCloseTo(-679_379, 0);
			expect(z).toBeCloseTo(-1_050_954, 0);
		});

		test("corner NW", () => {
			const { x, z } = LLtoLO({ map: "southAtlantic", lat: -48.1001, lng: -76.9 });
			expect(x).toBeCloseTo(293_254, 0);
			expect(z).toBeCloseTo(-1_330_176, 0);
		});

		test("Mount Pleasant", () => {
			const { x, z } = LLtoLO({ map: "southAtlantic", lat: -51.82078, lng: -58.45704 });
			expect(x).toBeCloseTo(73_307, 0);
			expect(z).toBeCloseTo(47_217, 0);
		});

		test("Rio Grande", () => {
			const { x, z } = LLtoLO({ map: "southAtlantic", lat: -53.77758, lng: -67.74921 });
			expect(x).toBeCloseTo(-197_137, 0);
			expect(z).toBeCloseTo(-559_444, 0);
		});

		test("El Calafate", () => {
			const { x, z } = LLtoLO({ map: "southAtlantic", lat: -50.28019, lng: -72.05202 });
			expect(x).toBeCloseTo(136_372, 0);
			expect(z).toBeCloseTo(-922_427, 0);
		});
	});
});
