import { describe, expect, test } from "@jest/globals";

import { LOtoLL } from "../../src";

describe("southAtlantic", () => {
	describe("LOtoLL", () => {
		test("x too small", () => {
			expect(() => LOtoLL({ map: "southAtlantic", x: -500_001, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for southAtlantic")
			);
		});

		test("x too big", () => {
			expect(() => LOtoLL({ map: "southAtlantic", x: 350_000, z: 0 })).toThrow(
				new Error("Coordinates outside of acceptable area for southAtlantic")
			);
		});

		test("z too small", () => {
			expect(() => LOtoLL({ map: "southAtlantic", x: 0, z: -1_100_001 })).toThrow(
				new Error("Coordinates outside of acceptable area for southAtlantic")
			);
		});

		test("z too big", () => {
			expect(() => LOtoLL({ map: "southAtlantic", x: 0, z: 200_000 })).toThrow(
				new Error("Coordinates outside of acceptable area for southAtlantic")
			);
		});

		test("corner NE", () => {
			const { lat, lng } = LOtoLL({ map: "southAtlantic", x: 349_999, z: 199_999 });
			expect(lat).toBeCloseTo(-49.33924, 5);
			expect(lng).toBeCloseTo(-56.27924, 5);
		});

		test("corner SE", () => {
			const { lat, lng } = LOtoLL({ map: "southAtlantic", x: -500_000, z: 199_999 });
			expect(lat).toBeCloseTo(-56.97935, 5);
			expect(lng).toBeCloseTo(-56.13856, 5);
		});

		test("corner SW", () => {
			const { lat, lng } = LOtoLL({ map: "southAtlantic", x: -500_000, z: -1_100_000 });
			expect(lat).toBeCloseTo(-55.35989, 5);
			expect(lng).toBeCloseTo(-76.82734, 5);
		});

		test("corner NW", () => {
			const { lat, lng } = LOtoLL({ map: "southAtlantic", x: 349_999, z: -1_100_000 });
			expect(lat).toBeCloseTo(-48.10079, 5);
			expect(lng).toBeCloseTo(-73.78702, 5);
		});

		test("Mount Pleasant", () => {
			const { lat, lng } = LOtoLL({ map: "southAtlantic", x: 73_306, z: 47_217 });
			expect(lat).toBeCloseTo(-51.82078, 5);
			expect(lng).toBeCloseTo(-58.45704, 5);
		});

		test("Rio Grande", () => {
			const { lat, lng } = LOtoLL({ map: "southAtlantic", x: -197_136, z: -559_443 });
			expect(lat).toBeCloseTo(-53.77758, 5);
			expect(lng).toBeCloseTo(-67.74921, 5);
		});

		test("El Calafate", () => {
			const { lat, lng } = LOtoLL({ map: "southAtlantic", x: 136_372, z: -922_427 });
			expect(lat).toBeCloseTo(-50.28019, 5);
			expect(lng).toBeCloseTo(-72.05202, 5);
		});
	});
});
