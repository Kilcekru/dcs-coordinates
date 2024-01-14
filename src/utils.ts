import { z } from "zod";
import { fromZodError } from "zod-validation-error";

import { DMS, dmsSchema } from "./types";

/**
 * Converts Decimal value to Degrees, Minutes, Seconds
 * Works for Latitude and Longitude
 *
 * @param dec decimal value
 * @returns degrees, minutes, seconds
 */
export function decToDms(dec: number): DMS {
	const parsed = z.number().safeParse(dec);
	if (!parsed.success) {
		throw fromZodError(parsed.error, { prefix: "decToDms - Invalid argument dec" });
	}
	const deg = Math.sign(dec) * Math.floor(Math.abs(dec));
	const minDec = 60 * Math.abs(dec % 1);
	const min = Math.floor(minDec);
	const sec = 60 * (minDec - min);
	return { deg, min, sec };
}

/**
 * Converts Degrees, Minutes, Seconds to Decimal value
 * Works for Latitude and Longitude
 *
 * @param dms degrees, minutes, seconds
 * @returns decimal value
 */
export function dmsToDec(dms: DMS): number {
	const parsed = dmsSchema.safeParse(dms);
	if (!parsed.success) {
		throw fromZodError(parsed.error, { prefix: "dmsToDec - Invalid argument dms" });
	}
	let sign = Math.sign(dms.deg);
	if (sign === 0) {
		if (Object.is(sign, -0)) {
			sign = -1;
		} else {
			sign = 1;
		}
	}
	return sign * (Math.abs(dms.deg) + dms.min / 60 + dms.sec / 3600);
}
