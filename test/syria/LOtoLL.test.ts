import { describe, expect, test } from "@jest/globals";

import { LOtoLL } from "../../src";

describe("Syria", () => {
	describe("LOtoLL", () => {
		test("x too small", () => {
			expect(() => LOtoLL({ theatre: "Syria", x: -340_001, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Syria")
			);
		});

		test("x too big", () => {
			expect(() => LOtoLL({ theatre: "Syria", x: 310_000, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Syria")
			);
		});

		test("z too small", () => {
			expect(() => LOtoLL({ theatre: "Syria", x: 0, z: -410_001 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Syria")
			);
		});

		test("z too big", () => {
			expect(() => LOtoLL({ theatre: "Syria", x: 0, z: 450_000 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Syria")
			);
		});

		test("corner NE", () => {
			const { lat, lng } = LOtoLL({ theatre: "Syria", x: 309_999, z: 449_999 });
			expect(lat).toBeCloseTo(37.84091, 5);
			expect(lng).toBeCloseTo(40.90018, 5);
		});

		test("corner SE", () => {
			const { lat, lng } = LOtoLL({ theatre: "Syria", x: -340_000, z: 449_999 });
			expect(lat).toBeCloseTo(31.98252, 5);
			expect(lng).toBeCloseTo(40.76967, 5);
		});

		test("corner SW", () => {
			const { lat, lng } = LOtoLL({ theatre: "Syria", x: -340_000, z: -410_000 });
			expect(lat).toBeCloseTo(31.78417, 5);
			expect(lng).toBeCloseTo(31.69127, 5);
		});

		test("corner NW", () => {
			const { lat, lng } = LOtoLL({ theatre: "Syria", x: 309_999, z: -410_000 });
			expect(lat).toBeCloseTo(37.59462, 5);
			expect(lng).toBeCloseTo(31.15836, 5);
		});

		test("Ercan", () => {
			const { lat, lng } = LOtoLL({ theatre: "Syria", x: 24_228, z: -218_192 });
			expect(lat).toBeCloseTo(35.15496, 5);
			expect(lng).toBeCloseTo(33.50223, 5);
		});

		test("Jirah", () => {
			const { lat, lng } = LOtoLL({ theatre: "Syria", x: 115_332, z: 187_062 });
			expect(lat).toBeCloseTo(36.09669, 5);
			expect(lng).toBeCloseTo(37.93646, 5);
		});

		test("Ruwayshid", () => {
			const { lat, lng } = LOtoLL({ theatre: "Syria", x: -294_525, z: 294_988 });
			expect(lat).toBeCloseTo(32.40504, 5);
			expect(lng).toBeCloseTo(39.1296, 5);
		});
	});
});
