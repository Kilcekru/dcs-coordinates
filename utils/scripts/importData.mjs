import { readdir, readFile, writeFile } from "node:fs/promises";
import * as Path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = Path.dirname(fileURLToPath(import.meta.url));

const srcDir = Path.join(dirname, "../../data/grid");
const targetDir = Path.join(dirname, "../../src/data");

async function main() {
	const files = await readdir(srcDir);
	for (const file of files) {
		if (!file.endsWith(".json")) {
			continue;
		}
		const coords = JSON.parse(await readFile(Path.join(srcDir, file)));

		const res = { minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity, coords };
		for (const [x, entry] of Object.entries(coords)) {
			const xNum = Number.parseInt(x);
			if (xNum < res.minX) {
				res.minX = xNum;
			}
			if (xNum > res.maxX) {
				res.maxX = xNum;
			}
			res.coords[x] = {};
			for (const [z, c] of Object.entries(entry)) {
				const zNum = Number.parseInt(z);
				if (zNum < res.minZ) {
					res.minZ = zNum;
				}
				if (zNum > res.maxZ) {
					res.maxZ = zNum;
				}
				res.coords[x][z] = {
					lat: round(c.lat, 6),
					lon: round(c.lon, 6),
				};
			}
		}

		await writeFile(Path.join(targetDir, file), JSON.stringify(res, undefined, "\t"));
	}
}

export function round(num, decimals) {
	const abs = Math.abs(num);
	if (abs < 0.1) {
		return 0;
	}
	const res = Math.sign(num) * +(Math.round(+(abs.toString() + `e+${decimals}`)).toString() + `e-${decimals}`);
	return res === 0 ? 0 : res;
}

main();
