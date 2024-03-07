import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { processCss } from "@pretzel-ui/tsup";

export default defineConfig({
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `pretzel_ui_alert_${hash}`,
      processCss: processCss,
    }) as unknown as any,
  ],
  entry: ["./src/index.ts"],
  external: ["@vanilla-extract/css"],
  format: ["esm"],
  sourcemap: true,
  clean: true,
  outDir: "./dist",
  dts: true,
});
