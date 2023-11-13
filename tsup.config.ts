import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

const tsupConfig = defineConfig({
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `zen_ui_${hash}`,
    }) as unknown as any,
  ],
  entry: ["./src/index.ts", "./src/kit/index.ts"],
  external: ["@vanilla-extract/css"],
  format: ["esm"],
  sourcemap: true,
  clean: true,
  outDir: "./dist",
  dts: true,
});

export default tsupConfig;
