import postcss from "postcss";
import autoprefixer from "autoprefixer";

export async function processCss(css: string) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined,
  });

  return result.css;
}
