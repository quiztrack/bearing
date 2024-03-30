import { defineConfig, Options as TsupOptions } from "tsup";

export function tsup(
  options: Pick<TsupOptions, "entry" | "esbuildPlugins" | "external">
) {
  return defineConfig({
    ...options,
    format: ["cjs", "esm"],
    sourcemap: true,
    clean: true,
    outDir: "./dist",
    dts: true,
  });
}
