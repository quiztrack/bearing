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
  overflowY: "hidden",
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

const dialogIconBorderStyle = style({
  paddingTop: "20px",
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingBottom: "14px",
});

const dialogActionBaseStyle = style({
  width: "100%",
  background: "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const dialogActionButtonStyle = style({
  width: "100%",
  color: "#007AFF",
  background: "transparent",
  fontFamily: "SF PRO",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontSize: "17px",
  fontStyle: "normal",
  textAlign: "center",
  lineHeight: "22px",
  letterSpacing: "-0.4px",
  paddingTop: "11px",
  paddingBottom: "11px",
  outline: "none",
  border: "none",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderColor: "#3C3C4321",
});

const dialogActionConfirmButtonStyle = style({
  fontWeight: "590",
});

const dialogActionCancelButtonStyle = style({
  fontWeight: "400",
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
  dialogIconBorderStyle,
  dialogActionBaseStyle,
  dialogActionButtonStyle,
  dialogActionConfirmButtonStyle,
  dialogActionCancelButtonStyle,
};
