import { describe, expect, test } from "@jest/globals";

import { LLtoLO } from "../../src";

describe("syria", () => {
	describe("LLtoLO", () => {
		test("lat too small", () => {
			expect(() => LLtoLO({ map: "syria", lat: 31.6999, lng: 35 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("lat too big", () => {
			expect(() => LLtoLO({ map: "syria", lat: 37.9, lng: 35 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("lng too small", () => {
			expect(() => LLtoLO({ map: "syria", lat: 35, lng: 31.0999 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("lng too big", () => {
			expect(() => LLtoLO({ map: "syria", lat: 35, lng: 41 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("corner NE", () => {
			const { x, z } = LLtoLO({ map: "syria", lat: 37.8999, lng: 40.9999 });
			expect(x).toBeCloseTo(316_729, 0);
			expect(z).toBeCloseTo(458_634, 0);
		});

		test("corner SE", () => {
			const { x, z } = LLtoLO({ map: "syria", lat: 31.7, lng: 40.9999 });
			expect(x).toBeCloseTo(-370_943, 0);
			expect(z).toBeCloseTo(472_333, 0);
		});

		test("corner SW", () => {
			const { x, z } = LLtoLO({ map: "syria", lat: 31.7, lng: 31.1 });
			expect(x).toBeCloseTo(-345_417, 0);
			expect(z).toBeCloseTo(-466_884, 0);
		});

		test("corner NW", () => {
			const { x, z } = LLtoLO({ map: "syria", lat: 37.8999, lng: 31.1 });
			expect(x).toBeCloseTo(344_385, 0);
			expect(z).toBeCloseTo(-412_281, 0);
		});

		test("Ercan", () => {
			const { x, z } = LLtoLO({ map: "syria", lat: 35.15496, lng: 33.50223 });
			expect(x).toBeCloseTo(24_227, 0);
			expect(z).toBeCloseTo(-218_192, 0);
		});

		test("Jirah", () => {
			const { x, z } = LLtoLO({ map: "syria", lat: 36.09669, lng: 37.93646 });
			expect(x).toBeCloseTo(115_331, 0);
			expect(z).toBeCloseTo(187_062, 0);
		});

		test("Ruwayshid", () => {
			const { x, z } = LLtoLO({ map: "syria", lat: 32.40504, lng: 39.1296 });
			expect(x).toBeCloseTo(-294_525, 0);
			expect(z).toBeCloseTo(294_988, 0);
		});
	});
});
