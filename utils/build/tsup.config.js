import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	clean: true,
	dts: true,
	platform: "node",
	watch: options.watch,
	// onSuccess: options.watch ? "node utils/start.js" : undefined,
}));
