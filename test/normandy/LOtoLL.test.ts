import { describe, expect, test } from "@jest/globals";

import { LOtoLL } from "../../src";

describe("normandy", () => {
	describe("LOtoLL", () => {
		test("x too small", () => {
			expect(() => LOtoLL({ map: "normandy", x: -130_001, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for normandy")
			);
		});

		test("x too big", () => {
			expect(() => LOtoLL({ map: "normandy", x: 250_000, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for normandy")
			);
		});

		test("z too small", () => {
			expect(() => LOtoLL({ map: "normandy", x: 0, z: -200_001 })).toThrow(
				new Error("Coordinates outside of acceptable area for normandy")
			);
		});

		test("z too big", () => {
			expect(() => LOtoLL({ map: "normandy", x: 0, z: 250_000 })).toThrow(
				new Error("Coordinates outside of acceptable area for normandy")
			);
		});

		test("corner NE", () => {
			const { lat, lng } = LOtoLL({ map: "normandy", x: 249_999, z: 249_999 });
			expect(lat).toBeCloseTo(51.58763, 5);
			expect(lng).toBeCloseTo(3.43393, 5);
		});

		test("corner SE", () => {
			const { lat, lng } = LOtoLL({ map: "normandy", x: -130_000, z: 249_999 });
			expect(lat).toBeCloseTo(48.1899, 5);
			expect(lng).toBeCloseTo(2.9958, 5);
		});

		test("corner SW", () => {
			const { lat, lng } = LOtoLL({ map: "normandy", x: -130_000, z: -200_000 });
			expect(lat).toBeCloseTo(48.34648, 5);
			expect(lng).toBeCloseTo(-3.06038, 5);
		});

		test("corner NW", () => {
			const { lat, lng } = LOtoLL({ map: "normandy", x: 249_999, z: -200_000 });
			expect(lat).toBeCloseTo(51.76418, 5);
			expect(lng).toBeCloseTo(-3.06483, 5);
		});

		test("Odiham", () => {
			const { lat, lng } = LOtoLL({ map: "normandy", x: 193_094, z: -51_835 });
			expect(lat).toBeCloseTo(51.23441, 5);
			expect(lng).toBeCloseTo(-0.94175, 5);
		});

		test("Conches", () => {
			const { lat, lng } = LOtoLL({ map: "normandy", x: -57_018, z: 94_576 });
			expect(lat).toBeCloseTo(48.93496, 5);
			expect(lng).toBeCloseTo(0.96153, 5);
		});

		test("Meautis", () => {
			const { lat, lng } = LOtoLL({ map: "normandy", x: -24_482, z: -71_879 });
			expect(lat).toBeCloseTo(49.2832, 5);
			expect(lng).toBeCloseTo(-1.29981, 5);
		});
	});
});
