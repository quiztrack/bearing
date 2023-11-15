import { style } from "@vanilla-extract/css";

const dialogBaseStyle = style({
  position: "relative",
  zIndex: 3000,
});

const backdropBaseStyle = style({
  position: "fixed",
  inset: "0",
});

const backdropBackgroundStyle = style({
  backgroundColor: "#00000066",
});

const dialogPanelBaseStyle = style({
  position: "fixed",
  inset: "0",
  overflow: "hidden",
});

const backdropEnterStyle = style({
  transitionTimingFunction: "ease-out",
  transitionDuration: "200ms",
});

const backdropEnterFromStyle = style({
  opacity: 0,
});

const backdropEnterToStyle = style({
  opacity: 1,
});

const backdropLeaveStyle = style({
  transitionTimingFunction: "ease-in",
  transitionDuration: "100ms",
});

const backdropLeaveFromStyle = style({
  opacity: 1,
});

const backdropLeaveToStyle = style({
  opacity: 0,
});

export {
  dialogBaseStyle,
  backdropBaseStyle,
  backdropBackgroundStyle,
  dialogPanelBaseStyle,
  backdropEnterStyle,
  backdropEnterFromStyle,
  backdropEnterToStyle,
  backdropLeaveStyle,
  backdropLeaveFromStyle,
  backdropLeaveToStyle,
};
