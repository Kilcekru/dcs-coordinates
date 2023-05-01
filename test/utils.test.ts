import { describe, expect, test } from "@jest/globals";

import { decToDms, dmsToDec } from "../src";

describe("utils", () => {
	test("", () => {
		const nums = [-428.17395, -211.664, -13.9956, -0.4, 0, 0.002, 47.7443, 629.66649];
		for (const num of nums) {
			expect(dmsToDec(decToDms(num))).toBeCloseTo(num, 14);
		}
	});

	describe("dmsToDec", () => {
		test("sydney", () => {
			// lat
			expect(dmsToDec({ deg: -33, min: 51, sec: 21.53 })).toBeCloseTo(-33.855981, 6);
			// lng
			expect(dmsToDec({ deg: 151, min: 12, sec: 24 })).toBeCloseTo(151.206667, 6);
		});

		test("london", () => {
			// lat
			expect(dmsToDec({ deg: 51, min: 30, sec: 35.514 })).toBeCloseTo(51.509865, 6);
			// lng
			expect(dmsToDec({ deg: -0, min: 7, sec: 5.1312 })).toBeCloseTo(-0.118092, 6);
		});
	});

	describe("decToDms", () => {
		test("sydney", () => {
			// lat
			const dmsLat = decToDms(-33.855981);
			expect(dmsLat.deg).toBe(-33);
			expect(dmsLat.min).toBe(51);
			expect(dmsLat.sec).toBeCloseTo(21.5316, 6);
			// lng
			const dmsLng = decToDms(151.206667);
			expect(dmsLng.deg).toBe(151);
			expect(dmsLng.min).toBe(12);
			expect(dmsLng.sec).toBeCloseTo(24.0012, 6);
		});

		test("london", () => {
			// lat
			const dmsLat = decToDms(51.509865);
			expect(dmsLat.deg).toBe(51);
			expect(dmsLat.min).toBe(30);
			expect(dmsLat.sec).toBeCloseTo(35.514, 6);
			// lng
			const dmsLng = decToDms(-0.118092);
			expect(dmsLng.deg).toBe(-0);
			expect(dmsLng.min).toBe(7);
			expect(dmsLng.sec).toBeCloseTo(5.1312, 6);
		});
	});
});
