import { describe, expect, test } from "@jest/globals";

import { LOtoLL } from "../../src";

describe("caucasus", () => {
	describe("LOtoLL", () => {
		test("x too small", () => {
			expect(() => LOtoLL({ map: "caucasus", x: -400_001, z: 500_000 })).toThrow(
				new Error("Coordinates outside of acceptable area for caucasus")
			);
		});

		test("x too big", () => {
			expect(() => LOtoLL({ map: "caucasus", x: 50_000, z: 500_000 })).toThrow(
				new Error("Coordinates outside of acceptable area for caucasus")
			);
		});

		test("z too small", () => {
			expect(() => LOtoLL({ map: "caucasus", x: -200_000, z: 199_999 })).toThrow(
				new Error("Coordinates outside of acceptable area for caucasus")
			);
		});

		test("z too big", () => {
			expect(() => LOtoLL({ map: "caucasus", x: -200_000, z: 930_000 })).toThrow(
				new Error("Coordinates outside of acceptable area for caucasus")
			);
		});

		test("corner NE", () => {
			const { lat, lng } = LOtoLL({ map: "caucasus", x: 49_999, z: 929_999 });
			expect(lat).toBeCloseTo(44.8373, 5);
			expect(lng).toBeCloseTo(46.02564, 5);
		});

		test("corner SE", () => {
			const { lat, lng } = LOtoLL({ map: "caucasus", x: -400_000, z: 929_999 });
			expect(lat).toBeCloseTo(40.88277, 5);
			expect(lng).toBeCloseTo(45.20685, 5);
		});

		test("corner SW", () => {
			const { lat, lng } = LOtoLL({ map: "caucasus", x: -400_000, z: 200_000 });
			expect(lat).toBeCloseTo(41.47871, 5);
			expect(lng).toBeCloseTo(36.58716, 5);
		});

		test("corner NW", () => {
			const { lat, lng } = LOtoLL({ map: "caucasus", x: 49_999, z: 200_000 });
			expect(lat).toBeCloseTo(45.52214, 5);
			expect(lng).toBeCloseTo(36.83528, 5);
		});

		test("Senaki-Kolkhi", () => {
			const { lat, lng } = LOtoLL({ map: "caucasus", x: -281_782, z: 647_279 });
			expect(lat).toBeCloseTo(42.24084, 5);
			expect(lng).toBeCloseTo(42.04801, 5);
		});

		test("Nalchik", () => {
			const { lat, lng } = LOtoLL({ map: "caucasus", x: -124_932, z: 760_421 });
			expect(lat).toBeCloseTo(43.514, 5);
			expect(lng).toBeCloseTo(43.63646, 5);
		});

		test("Krasnodar-Center", () => {
			const { lat, lng } = LOtoLL({ map: "caucasus", x: 11_685, z: 367_933 });
			expect(lat).toBeCloseTo(45.08694, 5);
			expect(lng).toBeCloseTo(38.93998, 5);
		});
	});
});
