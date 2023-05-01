/**
 * Converts Decimal value to Degrees, Minutes, Seconds
 * Works for Latitude and Longitude
 *
 * @param dec decimal value
 * @returns degrees, minutes, seconds
 */
export function decToDms(dec: number): DMS {
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

export interface DMS {
	deg: number;
	min: number;
	sec: number;
}
