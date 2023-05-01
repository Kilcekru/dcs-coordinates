import { describe, expect, test } from "@jest/globals";

import { LOtoLL } from "../../src";

describe("syria", () => {
	describe("LOtoLL", () => {
		test("x too small", () => {
			expect(() => LOtoLL({ map: "syria", x: -310_001, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("x too big", () => {
			expect(() => LOtoLL({ map: "syria", x: 280_000, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("z too small", () => {
			expect(() => LOtoLL({ map: "syria", x: 0, z: -330_001 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("z too big", () => {
			expect(() => LOtoLL({ map: "syria", x: 0, z: 400_000 })).toThrow(
				new Error("Coordinates outside of acceptable area for syria")
			);
		});

		test("corner NE", () => {
			const { lat, lng } = LOtoLL({ map: "syria", x: 279_999, z: 399_999 });
			expect(lat).toBeCloseTo(37.57838, 5);
			expect(lng).toBeCloseTo(40.32728, 5);
		});

		test("corner SE", () => {
			const { lat, lng } = LOtoLL({ map: "syria", x: -310_000, z: 399_999 });
			expect(lat).toBeCloseTo(32.25938, 5);
			expect(lng).toBeCloseTo(40.24425, 5);
		});

		test("corner SW", () => {
			const { lat, lng } = LOtoLL({ map: "syria", x: -310_000, z: -330_000 });
			expect(lat).toBeCloseTo(32.09873, 5);
			expect(lng).toBeCloseTo(32.511375, 5);
		});

		test("corner NW", () => {
			const { lat, lng } = LOtoLL({ map: "syria", x: 279_999, z: -330_000 });
			expect(lat).toBeCloseTo(37.38283, 5);
			expect(lng).toBeCloseTo(32.08232, 5);
		});

		test("Ercan", () => {
			const { lat, lng } = LOtoLL({ map: "syria", x: 24_228, z: -218_192 });
			expect(lat).toBeCloseTo(35.15496, 5);
			expect(lng).toBeCloseTo(33.50223, 5);
		});

		test("Jirah", () => {
			const { lat, lng } = LOtoLL({ map: "syria", x: 115_332, z: 187_062 });
			expect(lat).toBeCloseTo(36.09669, 5);
			expect(lng).toBeCloseTo(37.93646, 5);
		});

		test("Ruwayshid", () => {
			const { lat, lng } = LOtoLL({ map: "syria", x: -294_525, z: 294_988 });
			expect(lat).toBeCloseTo(32.40504, 5);
			expect(lng).toBeCloseTo(39.1296, 5);
		});
	});
});
