function linearInterpolation({ x, x1, x2, y1, y2 }: LinearInterpolationArgs): number {
	return (y1 * (x2 - x)) / (x2 - x1) + (y2 * (x - x1)) / (x2 - x1);
}

export function bilinearInterpolation(args: BilinearInterpolationArgs): number {
	return linearInterpolation({
		x: args.y,
		x1: args.y1,
		x2: args.y2,
		y1: linearInterpolation({
			x: args.x,
			x1: args.x1,
			x2: args.x2,
			y1: args.v11,
			y2: args.v21,
		}),
		y2: linearInterpolation({
			x: args.x,
			x1: args.x1,
			x2: args.x2,
			y1: args.v12,
			y2: args.v22,
		}),
	});
}

interface LinearInterpolationArgs {
	x: number;
	x1: number;
	x2: number;
	y1: number;
	y2: number;
}

interface BilinearInterpolationArgs {
	x: number;
	x1: number;
	x2: number;
	y: number;
	y1: number;
	y2: number;
	v11: number;
	v12: number;
	v21: number;
	v22: number;
}
