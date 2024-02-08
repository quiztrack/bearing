import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { processCss } from "../../config/utils/process-css";

export default defineConfig({
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `zen_ui_${hash}`,
      processCss: processCss,
    }) as unknown as any,
  ],
  entry: ["src/index.ts"],
  external: ["@vanilla-extract/css"],
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true,
  outDir: "./dist",
  dts: true,
});
