import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	entry: ["src/index.ts"],
	format: "esm",
	clean: true,
	dts: true,
	platform: "node",
	watch: options.watch,
	minify: true,
	// onSuccess: options.watch ? "node utils/start.js" : undefined,
}));
