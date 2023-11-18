import { style, styleVariants } from "@vanilla-extract/css";

const pageStyle = style({
  width: "100%",
  height: "100%",
  display: "flex",
});

const pageHiddenX = style({
  overflowX: "hidden",
});

const pageScrollingX = style({
  overflowX: "auto",
});

const pageHiddenY = style({
  overflowY: "hidden",
});

const pageScrollingY = style({
  overflowY: "auto",
});

const pageScrollingXVars = styleVariants({
  scrolling: {
    overflowX: "auto",
  },
  hidden: {
    overflowX: "hidden",
  },
});

const pageScrollingYVars = styleVariants({
  scrolling: {
    overflowY: "auto",
  },
  hidden: {
    overflowY: "hidden",
  },
});

export {
  pageStyle,
  pageHiddenX,
  pageScrollingX,
  pageHiddenY,
  pageScrollingY,
  pageScrollingXVars,
  pageScrollingYVars,
};
