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

const alertPanelBorderStyle = style({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px",
  textAlign: "center",
});

const alertPanelStyle = style({
  width: "100%",
  maxWidth: "270px",
  backgroundColor: "#ffffffD1",
  backgroundBlendMode: "color-dodge",
  borderRadius: "14px",
  boxSizing: "border-box",
  backdropFilter: "blur(40px)",
  paddingTop: "19px",
  paddingBottom: "0px",
  overflowX: "hidden",
});

const alertPanelTitleStyle = style({
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

const alertPanelTextBorderStyle = style({
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

const alertIconBorderStyle = style({
  paddingTop: "20px",
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingBottom: "14px",
});

const alertActionBaseStyle = style({
  width: "100%",
  background: "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const alertActionButtonStyle = style({
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

const alertActionConfirmButtonStyle = style({
  fontWeight: "590",
});

const dialogActionCancelButtonStyle = style({
  fontWeight: "400",
});

export {
  dialogBaseStyle,
  backdropBaseStyle,
  dialogPanelBaseStyle,
  alertPanelBorderStyle,
  alertPanelStyle,
  alertPanelTitleStyle,
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
  alertPanelTextBorderStyle,
  alertIconBorderStyle,
  alertActionBaseStyle,
  alertActionButtonStyle,
  alertActionConfirmButtonStyle,
  dialogActionCancelButtonStyle,
};
