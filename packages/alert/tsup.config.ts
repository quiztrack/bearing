import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { processCss, tsup } from "@pretzel-ui/tsup";

export default tsup({
  entry: ["./src/index.ts"],
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `pretzel_ui_alert_${hash}`,
      processCss: processCss,
    }) as unknown as any,
  ],
  external: ["@vanilla-extract/css"],
});
