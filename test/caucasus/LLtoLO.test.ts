import { describe, expect, test } from "@jest/globals";

import { LLtoLO } from "../../src";

describe("Caucasus", () => {
	describe("LLtoLO", () => {
		test("lat too small", () => {
			expect(() => LLtoLO({ theatre: "Caucasus", lat: 40.2999, lng: 40 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Caucasus")
			);
		});

		test("lat too big", () => {
			expect(() => LLtoLO({ theatre: "Caucasus", lat: 46.0, lng: 40 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Caucasus")
			);
		});

		test("lng too small", () => {
			expect(() => LLtoLO({ theatre: "Caucasus", lat: 42, lng: 35.8999 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Caucasus")
			);
		});

		test("lng too big", () => {
			expect(() => LLtoLO({ theatre: "Caucasus", lat: 42, lng: 47 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Caucasus")
			);
		});

		test("corner NE", () => {
			const { x, z } = LLtoLO({ theatre: "Caucasus", lat: 45.9999, lng: 46.9999 });
			expect(x).toBeCloseTo(192_096, 0);
			expect(z).toBeCloseTo(984_069, 0);
		});

		test("corner SE", () => {
			const { x, z } = LLtoLO({ theatre: "Caucasus", lat: 40.3, lng: 46.9999 });
			expect(x).toBeCloseTo(-441_863, 0);
			expect(z).toBeCloseTo(1_092_132, 0);
		});

		test("corner SW", () => {
			const { x, z } = LLtoLO({ theatre: "Caucasus", lat: 40.3, lng: 35.9 });
			expect(x).toBeCloseTo(-533_024, 0);
			expect(z).toBeCloseTo(146_957, 0);
		});

		test("corner NW", () => {
			const { x, z } = LLtoLO({ theatre: "Caucasus", lat: 45.9999, lng: 35.9 });
			expect(x).toBeCloseTo(100_011, 0);
			expect(z).toBeCloseTo(125_033, 0);
		});

		test("Senaki-Kolkhi", () => {
			const { x, z } = LLtoLO({ theatre: "Caucasus", lat: 42.24084, lng: 42.04801 });
			expect(x).toBeCloseTo(-281_782, 0);
			expect(z).toBeCloseTo(647_279, 0);
		});

		test("Nalchik", () => {
			const { x, z } = LLtoLO({ theatre: "Caucasus", lat: 43.514, lng: 43.63646 });
			expect(x).toBeCloseTo(-124_931, 0);
			expect(z).toBeCloseTo(760_422, 0);
		});

		test("Krasnodar-Center", () => {
			const { x, z } = LLtoLO({ theatre: "Caucasus", lat: 45.08694, lng: 38.93998 });
			expect(x).toBeCloseTo(11_685, 0);
			expect(z).toBeCloseTo(367_933, 0);
		});
	});
});
