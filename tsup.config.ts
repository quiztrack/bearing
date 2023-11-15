import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import postcss from "postcss";
import autoprefixer from "autoprefixer";

async function processCss(css: string) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined,
  });

  return result.css;
}

const tsupConfig = defineConfig({
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `zen_ui_${hash}`,
      processCss: processCss,
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
