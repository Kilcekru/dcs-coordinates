import { describe, expect, test } from "@jest/globals";

import { LLtoLO } from "../../src";

describe("PersianGulf", () => {
	describe("LLtoLO", () => {
		test("lat too small", () => {
			expect(() => LLtoLO({ theatre: "PersianGulf", lat: 22.6999, lng: 55 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre PersianGulf")
			);
		});

		test("lat too big", () => {
			expect(() => LLtoLO({ theatre: "PersianGulf", lat: 31.2, lng: 55 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre PersianGulf")
			);
		});

		test("lng too small", () => {
			expect(() => LLtoLO({ theatre: "PersianGulf", lat: 27, lng: 51.3999 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre PersianGulf")
			);
		});

		test("lng too big", () => {
			expect(() => LLtoLO({ theatre: "PersianGulf", lat: 27, lng: 58.9 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre PersianGulf")
			);
		});

		test("corner NE", () => {
			const { x, z } = LLtoLO({ theatre: "PersianGulf", lat: 31.1999, lng: 58.8999 });
			expect(x).toBeCloseTo(558_379, 0);
			expect(z).toBeCloseTo(256_768, 0);
		});

		test("corner SE", () => {
			const { x, z } = LLtoLO({ theatre: "PersianGulf", lat: 22.7, lng: 58.8999 });
			expect(x).toBeCloseTo(-383_373, 0);
			expect(z).toBeCloseTo(270_914, 0);
		});

		test("corner SW", () => {
			const { x, z } = LLtoLO({ theatre: "PersianGulf", lat: 22.7, lng: 51.4 });
			expect(x).toBeCloseTo(-373_740, 0);
			expect(z).toBeCloseTo(-500_049, 0);
		});

		test("corner NW", () => {
			const { x, z } = LLtoLO({ theatre: "PersianGulf", lat: 31.1999, lng: 51.4 });
			expect(x).toBeCloseTo(570_366, 0);
			expect(z).toBeCloseTo(-458_132, 0);
		});

		test("Shiraz", () => {
			const { x, z } = LLtoLO({ theatre: "PersianGulf", lat: 29.5407, lng: 52.5916 });
			expect(x).toBeCloseTo(381_076, 0);
			expect(z).toBeCloseTo(-351_586, 0);
		});

		test("Havadarya", () => {
			const { x, z } = LLtoLO({ theatre: "PersianGulf", lat: 27.15818, lng: 56.17182 });
			expect(x).toBeCloseTo(109_293, 0);
			expect(z).toBeCloseTo(-6_298, 0);
		});

		test("Al-Bateen", () => {
			const { x, z } = LLtoLO({ theatre: "PersianGulf", lat: 24.42805, lng: 54.4586 });
			expect(x).toBeCloseTo(-190_949, 0);
			expect(z).toBeCloseTo(-181_926, 0);
		});
	});
});
