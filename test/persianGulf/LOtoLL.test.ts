import { describe, expect, test } from "@jest/globals";

import { LOtoLL } from "../../src";

describe("PersianGulf", () => {
	describe("LOtoLL", () => {
		test("x too small", () => {
			expect(() => LOtoLL({ theatre: "PersianGulf", x: -370_001, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre PersianGulf")
			);
		});

		test("x too big", () => {
			expect(() => LOtoLL({ theatre: "PersianGulf", x: 550_000, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre PersianGulf")
			);
		});

		test("z too small", () => {
			expect(() => LOtoLL({ theatre: "PersianGulf", x: 0, z: -450_001 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre PersianGulf")
			);
		});

		test("z too big", () => {
			expect(() => LOtoLL({ theatre: "PersianGulf", x: 0, z: 250_000 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre PersianGulf")
			);
		});

		test("corner NE", () => {
			const { lat, lng } = LOtoLL({ theatre: "PersianGulf", x: 549_999, z: 249_999 });
			expect(lat).toBeCloseTo(31.12536, 5);
			expect(lng).toBeCloseTo(58.82743, 5);
		});

		test("corner SE", () => {
			const { lat, lng } = LOtoLL({ theatre: "PersianGulf", x: -370_000, z: 249_999 });
			expect(lat).toBeCloseTo(22.82305, 5);
			expect(lng).toBeCloseTo(58.69786, 5);
		});

		test("corner SW", () => {
			const { lat, lng } = LOtoLL({ theatre: "PersianGulf", x: -370_000, z: -450_000 });
			expect(lat).toBeCloseTo(22.74995, 5);
			expect(lng).toBeCloseTo(51.883935, 5);
		});

		test("corner NW", () => {
			const { lat, lng } = LOtoLL({ theatre: "PersianGulf", x: 549_999, z: -450_000 });
			expect(lat).toBeCloseTo(31.02066, 5);
			expect(lng).toBeCloseTo(51.49555, 5);
		});

		test("Shiraz", () => {
			const { lat, lng } = LOtoLL({ theatre: "PersianGulf", x: 381_076, z: -351_586 });
			expect(lat).toBeCloseTo(29.5407, 5);
			expect(lng).toBeCloseTo(52.5916, 5);
		});

		test("Havadarya", () => {
			const { lat, lng } = LOtoLL({ theatre: "PersianGulf", x: 109_294, z: -6_298 });
			expect(lat).toBeCloseTo(27.15818, 5);
			expect(lng).toBeCloseTo(56.17182, 5);
		});

		test("Al-Bateen", () => {
			const { lat, lng } = LOtoLL({ theatre: "PersianGulf", x: -190_949, z: -181_926 });
			expect(lat).toBeCloseTo(24.42805, 5);
			expect(lng).toBeCloseTo(54.4586, 5);
		});
	});
});
