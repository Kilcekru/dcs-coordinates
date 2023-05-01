import { describe, expect, test } from "@jest/globals";

import { LOtoLL } from "../../src";

describe("persianGulf", () => {
	describe("LOtoLL", () => {
		test("x too small", () => {
			expect(() => LOtoLL({ map: "persianGulf", x: -290_001, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for persianGulf")
			);
		});

		test("x too big", () => {
			expect(() => LOtoLL({ map: "persianGulf", x: 470_000, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for persianGulf")
			);
		});

		test("z too small", () => {
			expect(() => LOtoLL({ map: "persianGulf", x: 0, z: -370_001 })).toThrow(
				new Error("Coordinates outside of acceptable area for persianGulf")
			);
		});

		test("z too big", () => {
			expect(() => LOtoLL({ map: "persianGulf", x: 0, z: 170_000 })).toThrow(
				new Error("Coordinates outside of acceptable area for persianGulf")
			);
		});

		test("corner NE", () => {
			const { lat, lng } = LOtoLL({ map: "persianGulf", x: 469_999, z: 169_999 });
			expect(lat).toBeCloseTo(30.41276, 5);
			expect(lng).toBeCloseTo(57.9812, 5);
		});

		test("corner SE", () => {
			const { lat, lng } = LOtoLL({ map: "persianGulf", x: -290_000, z: 169_999 });
			expect(lat).toBeCloseTo(23.55201, 5);
			expect(lng).toBeCloseTo(57.92338, 5);
		});

		test("corner SW", () => {
			const { lat, lng } = LOtoLL({ map: "persianGulf", x: -290_000, z: -370_000 });
			expect(lat).toBeCloseTo(23.49356, 5);
			expect(lng).toBeCloseTo(52.63724, 5);
		});

		test("corner NW", () => {
			const { lat, lng } = LOtoLL({ map: "persianGulf", x: 469_999, z: -370_000 });
			expect(lat).toBeCloseTo(30.33416, 5);
			expect(lng).toBeCloseTo(52.36514, 5);
		});

		test("Shiraz", () => {
			const { lat, lng } = LOtoLL({ map: "persianGulf", x: 381_076, z: -351_586 });
			expect(lat).toBeCloseTo(29.5407, 5);
			expect(lng).toBeCloseTo(52.5916, 5);
		});

		test("Havadarya", () => {
			const { lat, lng } = LOtoLL({ map: "persianGulf", x: 109_294, z: -6_298 });
			expect(lat).toBeCloseTo(27.15818, 5);
			expect(lng).toBeCloseTo(56.17182, 5);
		});

		test("Al-Bateen", () => {
			const { lat, lng } = LOtoLL({ map: "persianGulf", x: -190_949, z: -181_926 });
			expect(lat).toBeCloseTo(24.42805, 5);
			expect(lng).toBeCloseTo(54.4586, 5);
		});
	});
});
