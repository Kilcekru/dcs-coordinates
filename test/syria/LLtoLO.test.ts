import { describe, expect, test } from "@jest/globals";

import { LLtoLO } from "../../src";

describe("syria", () => {
	describe("LLtoLO", () => {
		test("lat too small", () => {
			expect(() => LLtoLO({ map: "syria", lat: 31.9999, lng: 35 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("lat too big", () => {
			expect(() => LLtoLO({ map: "syria", lat: 37.6, lng: 35 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("lng too small", () => {
			expect(() => LLtoLO({ map: "syria", lat: 35, lng: 31.9999 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("lng too big", () => {
			expect(() => LLtoLO({ map: "syria", lat: 35, lng: 40.4 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("corner NE", () => {
			const { x, z } = LLtoLO({ map: "syria", lat: 37.5999, lng: 40.3999 });
			expect(x).toBeCloseTo(282_480, 0);
			expect(z).toBeCloseTo(406_376, 0);
		});

		test("corner SE", () => {
			const { x, z } = LLtoLO({ map: "syria", lat: 32, lng: 40.3999 });
			expect(x).toBeCloseTo(-338_574, 0);
			expect(z).toBeCloseTo(415_035, 0);
		});

		test("corner SW", () => {
			const { x, z } = LLtoLO({ map: "syria", lat: 32, lng: 32 });
			expect(x).toBeCloseTo(-317_938, 0);
			expect(z).toBeCloseTo(-379_112, 0);
		});

		test("corner NW", () => {
			const { x, z } = LLtoLO({ map: "syria", lat: 37.5999, lng: 32 });
			expect(x).toBeCloseTo(304_669, 0);
			expect(z).toBeCloseTo(-335_499, 0);
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
