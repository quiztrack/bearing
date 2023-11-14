import { style } from "@vanilla-extract/css";

const dialogBaseStyle = style({
  position: "relative",
});

const backdropBaseStyle = style({
  backgroundColor: "#00000099",
  position: "fixed",
  inset: "0",
});

const dialogPanelBaseStyle = style({
  position: "fixed",
  inset: "0",
  overflowY: "auto",
});

const backdropEnterStyle = style({
  transitionTimingFunction: "ease-out",
  transitionDuration: "300ms",
});

const backdropEnterFromStyle = style({
  opacity: 0,
});

const backdropEnterToStyle = style({
  opacity: 1,
});

const backdropLeaveStyle = style({
  transitionTimingFunction: "ease-in",
  transitionDuration: "200ms",
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
  dialogPanelBaseStyle,
  backdropEnterStyle,
  backdropEnterFromStyle,
  backdropEnterToStyle,
  backdropLeaveStyle,
  backdropLeaveFromStyle,
  backdropLeaveToStyle,
};
