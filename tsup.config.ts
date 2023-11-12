import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

const tsupConfig = defineConfig({
  esbuildPlugins: [
    vanillaExtractPlugin() as unknown as any
  ],
  entry: [
    "./src/index.ts"
  ],
  external: ["@vanilla-extract/css"],
  format: ["esm"],
  sourcemap: true,
  clean: true,
  outDir: "./dist",
  dts: true
});

export default tsupConfig;
