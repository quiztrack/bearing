import { style } from "@vanilla-extract/css";

const imageBaseStyle = style({});

const imageEnterStyle = style({
  transitionProperty: "opacity transform",
  transitionDuration: "300ms",
  transitionTimingFunction: "ease-out",
});

const imageEnterFromStyle = style({
  opacity: 0,
  transform: "scale(0.7)",
});

const imageEnterToStyle = style({
  opacity: 1,
  transform: "scale(1)",
});

const imageLeaveStyle = style({});
const imageLeaveFromStyle = style({});
const imageLeaveToStyle = style({});

export {
  imageBaseStyle,
  imageEnterStyle,
  imageEnterFromStyle,
  imageEnterToStyle,
  imageLeaveStyle,
  imageLeaveFromStyle,
  imageLeaveToStyle,
};
