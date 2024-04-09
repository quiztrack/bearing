import { style, keyframes } from "@vanilla-extract/css";

const roll = keyframes({
  "0%": {
    transform: "rotate(180deg)",
  },
  "100%": {
    transform: "rotate(540deg)",
  },
});

export const spinnerStyles = style({
  animationName: roll,
  animationDuration: "0.8s",
  animationIterationCount: "infinite",
  animationTimingFunction: "steps(8, end)",
});
