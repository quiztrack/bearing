import { style } from "@vanilla-extract/css";

export const dialogBaseStyle = style({
  position: "relative",
  zIndex: 3000,
});

export const backdropBaseStyle = style({
  position: "fixed",
  inset: "0",
});

export const backdropBackgroundStyle = style({
  backgroundColor: "#00000066",
});

export const dialogPanelBaseStyle = style({
  position: "fixed",
  inset: "0",
  overflow: "hidden",
});

export const backdropEnterStyle = style({
  transitionTimingFunction: "ease-out",
  transitionDuration: "200ms",
});

export const backdropEnterFromStyle = style({
  opacity: 0,
});

export const backdropEnterToStyle = style({
  opacity: 1,
});

export const backdropLeaveStyle = style({
  transitionTimingFunction: "ease-in",
  transitionDuration: "100ms",
});

export const backdropLeaveFromStyle = style({
  opacity: 1,
});

export const backdropLeaveToStyle = style({
  opacity: 0,
});
