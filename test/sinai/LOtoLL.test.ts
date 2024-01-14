import { describe, expect, test } from "@jest/globals";

import { LOtoLL } from "../../src";

describe("Sinai", () => {
	describe("LOtoLL", () => {
		test("x too small", () => {
			expect(() => LOtoLL({ theatre: "Sinai", x: -250_001, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Sinai")
			);
		});

		test("x too big", () => {
			expect(() => LOtoLL({ theatre: "Sinai", x: 330_000, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Sinai")
			);
		});

		test("z too small", () => {
			expect(() => LOtoLL({ theatre: "Sinai", x: 0, z: -150_001 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Sinai")
			);
		});

		test("z too big", () => {
			expect(() => LOtoLL({ theatre: "Sinai", x: 0, z: 470_000 })).toThrow(
				new Error("Coordinates outside of acceptable area for theatre Sinai")
			);
		});

		test("corner NE", () => {
			const { lat, lng } = LOtoLL({ theatre: "Sinai", x: 329_999, z: 469_999 });
			expect(lat).toBeCloseTo(32.99478, 5);
			expect(lng).toBeCloseTo(36.21888, 5);
		});

		test("corner SE", () => {
			const { lat, lng } = LOtoLL({ theatre: "Sinai", x: -250_000, z: 469_999 });
			expect(lat).toBeCloseTo(27.76868, 5);
			expect(lng).toBeCloseTo(36.05177, 5);
		});

		test("corner SW", () => {
			const { lat, lng } = LOtoLL({ theatre: "Sinai", x: -250_000, z: -150_000 });
			expect(lat).toBeCloseTo(27.76443, 5);
			expect(lng).toBeCloseTo(29.76132, 5);
		});

		test("corner NW", () => {
			const { lat, lng } = LOtoLL({ theatre: "Sinai", x: 329_999, z: -150_000 });
			expect(lat).toBeCloseTo(32.98954, 5);
			expect(lng).toBeCloseTo(29.58402, 5);
		});

		test("Cairo-West", () => {
			const { lat, lng } = LOtoLL({ theatre: "Sinai", x: 7_372, z: -33_544 });
			expect(lat).toBeCloseTo(30.10857, 5);
			expect(lng).toBeCloseTo(30.8956, 5);
		});

		test("Ramon", () => {
			const { lat, lng } = LOtoLL({ theatre: "Sinai", x: 80_508, z: 328_814 });
			expect(lat).toBeCloseTo(30.77469, 5);
			expect(lng).toBeCloseTo(34.66769, 5);
		});

		test("Palmahim", () => {
			const { lat, lng } = LOtoLL({ theatre: "Sinai", x: 205_484, z: 329_304 });
			expect(lat).toBeCloseTo(31.90176, 5);
			expect(lng).toBeCloseTo(34.69288, 5);
		});
	});
});
