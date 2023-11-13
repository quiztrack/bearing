import { globalStyle } from "@vanilla-extract/css";

globalStyle("body,html", {
  width: "100%",
  height: "100%",
});

globalStyle("*", {
  margin: 0,
});

globalStyle("#storybook-root", {
  width: "inherit",
  height: "inherit",
  position: "fixed",
  top: 0,
  left: 0,
});
