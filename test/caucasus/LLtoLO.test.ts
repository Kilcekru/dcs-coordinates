import { describe, expect, test } from "@jest/globals";

import { LLtoLO } from "../../src";

describe.only("caucasus", () => {
	describe("LLtoLO", () => {
		test("lat too small", () => {
			expect(() => LLtoLO({ map: "caucasus", lat: 40.8999, lng: 40 })).toThrow(
				new Error("Coordinates outside of acceptable area for caucasus")
			);
		});

		test("lat too big", () => {
			expect(() => LLtoLO({ map: "caucasus", lat: 45.5, lng: 40 })).toThrow(
				new Error("Coordinates outside of acceptable area for caucasus")
			);
		});

		test("lng too small", () => {
			expect(() => LLtoLO({ map: "caucasus", lat: 42, lng: 36.5999 })).toThrow(
				new Error("Coordinates outside of acceptable area for caucasus")
			);
		});

		test("lng too big", () => {
			expect(() => LLtoLO({ map: "caucasus", lat: 42, lng: 46 })).toThrow(
				new Error("Coordinates outside of acceptable area for caucasus")
			);
		});

		test("corner NE", () => {
			const { x, z } = LLtoLO({ map: "caucasus", lat: 45.4999, lng: 45.9999 });
			expect(x).toBeCloseTo(123_243, 0);
			expect(z).toBeCloseTo(915_918, 0);
		});

		test("corner SE", () => {
			const { x, z } = LLtoLO({ map: "caucasus", lat: 40.9, lng: 45.9999 });
			expect(x).toBeCloseTo(-388_270, 0);
			expect(z).toBeCloseTo(996_742, 0);
		});

		test("corner SW", () => {
			const { x, z } = LLtoLO({ map: "caucasus", lat: 40.9, lng: 36.6 });
			expect(x).toBeCloseTo(-464_217, 0);
			expect(z).toBeCloseTo(203_734, 0);
		});

		test("corner NW", () => {
			const { x, z } = LLtoLO({ map: "caucasus", lat: 45.4999, lng: 36.6 });
			expect(x).toBeCloseTo(46_677, 0);
			expect(z).toBeCloseTo(181_736, 0);
		});

		test("Senaki-Kolkhi", () => {
			const { x, z } = LLtoLO({ map: "caucasus", lat: 42.24084, lng: 42.04801 });
			expect(x).toBeCloseTo(-281_782, 0);
			expect(z).toBeCloseTo(647_279, 0);
		});

		test("Nalchik", () => {
			const { x, z } = LLtoLO({ map: "caucasus", lat: 43.514, lng: 43.63646 });
			expect(x).toBeCloseTo(-124_931, 0);
			expect(z).toBeCloseTo(760_422, 0);
		});

		test("Krasnodar-Center", () => {
			const { x, z } = LLtoLO({ map: "caucasus", lat: 45.08694, lng: 38.93998 });
			expect(x).toBeCloseTo(11_685, 0);
			expect(z).toBeCloseTo(367_933, 0);
		});
	});
});
