import { describe, expect, test } from "@jest/globals";

import { LLtoLO } from "../../src";

describe("sinai", () => {
	describe("LLtoLO", () => {
		test("lat too small", () => {
			expect(() => LLtoLO({ map: "sinai", lat: 27.6999, lng: 32 })).toThrow(
				new Error("Coordinates outside of acceptable area for sinai")
			);
		});

		test("lat too big", () => {
			expect(() => LLtoLO({ map: "sinai", lat: 33, lng: 32 })).toThrow(
				new Error("Coordinates outside of acceptable area for sinai")
			);
		});

		test("lng too small", () => {
			expect(() => LLtoLO({ map: "sinai", lat: 30, lng: 29.4999 })).toThrow(
				new Error("Coordinates outside of acceptable area for sinai")
			);
		});

		test("lng too big", () => {
			expect(() => LLtoLO({ map: "sinai", lat: 30, lng: 36.3 })).toThrow(
				new Error("Coordinates outside of acceptable area for sinai")
			);
		});

		test("corner NE", () => {
			const { x, z } = LLtoLO({ map: "sinai", lat: 32.9999, lng: 36.2999 });
			expect(x).toBeCloseTo(330_802, 0);
			expect(z).toBeCloseTo(477_555, 0);
		});

		test("corner SE", () => {
			const { x, z } = LLtoLO({ map: "sinai", lat: 27.7, lng: 36.2999 });
			expect(x).toBeCloseTo(-256_983, 0);
			expect(z).toBeCloseTo(494_673, 0);
		});

		test("corner SW", () => {
			const { x, z } = LLtoLO({ map: "sinai", lat: 27.7, lng: 29.5 });
			expect(x).toBeCloseTo(-256_437, 0);
			expect(z).toBeCloseTo(-175_978, 0);
		});

		test("corner NW", () => {
			const { x, z } = LLtoLO({ map: "sinai", lat: 32.9999, lng: 29.5 });
			expect(x).toBeCloseTo(331_407, 0);
			expect(z).toBeCloseTo(-157_817, 0);
		});

		test("Cairo-West", () => {
			const { x, z } = LLtoLO({ map: "sinai", lat: 30.10857, lng: 30.8956 });
			expect(x).toBeCloseTo(7_372, 0);
			expect(z).toBeCloseTo(-33_544, 0);
		});

		test("Ramon", () => {
			const { x, z } = LLtoLO({ map: "sinai", lat: 30.77469, lng: 34.66769 });
			expect(x).toBeCloseTo(80_509, 0);
			expect(z).toBeCloseTo(328_813, 0);
		});

		test("Palmahim", () => {
			const { x, z } = LLtoLO({ map: "sinai", lat: 31.90176, lng: 34.69288 });
			expect(x).toBeCloseTo(205_484, 0);
			expect(z).toBeCloseTo(329_305, 0);
		});
	});
});
