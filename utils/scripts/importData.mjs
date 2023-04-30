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
		const grid = JSON.parse(await readFile(Path.join(srcDir, file)));

		const res = { minX: grid.minX, minZ: grid.minZ, minLat: grid.minLat, minLng: grid.minLng, lo: [], ll: [] };
		for (const entry of grid.lo) {
			const tmp = [];
			for (const c of entry) {
				tmp.push([round(c[0], 6), round(c[1], 6)]);
			}
			res.lo.push(tmp);
		}
		for (const entry of grid.ll) {
			const tmp = [];
			for (const c of entry) {
				tmp.push([Math.round(c[0]), Math.round(c[1])]);
			}
			res.ll.push(tmp);
		}

		await writeFile(Path.join(targetDir, file), JSON.stringify(res, undefined, "\t"));
	}
}

export function round(num, decimals) {
	const abs = Math.abs(num);
	if (abs < 1e-6) {
		return 0;
	}
	const res = Math.sign(num) * +(Math.round(+(abs.toString() + `e+${decimals}`)).toString() + `e-${decimals}`);
	return res === 0 ? 0 : res;
}

main();
