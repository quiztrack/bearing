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

const dialogPanelBorderStyle = style({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px",
  textAlign: "center",
});

const dialogPanelStyle = style({
  width: "100%",
  maxWidth: "270px",
  backgroundColor: "#ffffffD1",
  backgroundBlendMode: "color-dodge",
  borderRadius: "14px",
  boxSizing: "border-box",
  backdropFilter: "blur(40px)",
  paddingTop: "19px",
  paddingBottom: "0px",
});

const dialogPanelTitleStyle = style({
  color: "#000000",
  alignSelf: "stretch",
  textAlign: "center",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: "SF Pro",
  fontSize: "17px",
  fontStyle: "normal",
  fontWeight: "590",
  lineHeight: "22px",
  letterSpacing: "-0.4px",
  userSelect: "none",
});

const dialogPanelMessageBase = style({
  marginTop: "2px",
  marginBottom: "2px",
});

const dialogPanelMessageContentStyle = style({
  color: "#000000",
  alignSelf: "stretch",
  textAlign: "center",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: "SF Pro",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "18px",
  letterSpacing: "-0.3px",
});

const dialogPanelTextBorderStyle = style({
  boxSizing: "border-box",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingBottom: "15px",
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

const panelEnterStyle = style({
  transitionTimingFunction: "ease-out",
  transitionDuration: "300ms",
});

const panelEnterFromStyle = style({
  opacity: 0,
  transform: "scale(1.05)",
});
const panelEnterToStyle = style({
  opacity: 100,
  transform: "scale(1)",
});

const panelLeaveStyle = style({
  transitionTimingFunction: "ease-in",
  transitionDuration: "200ms",
});

const panelLeaveFromStyle = style({
  opacity: 100,
  transform: "scale(1)",
});

const panelLeaveToStyle = style({
  opacity: 0,
  transform: "scale(1)",
});

const dialogIconBorderStyle = style({
  paddingTop: "20px",
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingBottom: "20px",
});

export {
  dialogBaseStyle,
  backdropBaseStyle,
  dialogPanelBaseStyle,
  dialogPanelBorderStyle,
  dialogPanelStyle,
  dialogPanelTitleStyle,
  backdropEnterStyle,
  backdropEnterFromStyle,
  backdropEnterToStyle,
  backdropLeaveStyle,
  backdropLeaveFromStyle,
  backdropLeaveToStyle,
  panelEnterStyle,
  panelEnterFromStyle,
  panelEnterToStyle,
  panelLeaveFromStyle,
  panelLeaveStyle,
  panelLeaveToStyle,
  dialogPanelMessageBase,
  dialogPanelMessageContentStyle,
  dialogPanelTextBorderStyle,
  dialogIconBorderStyle,
};
