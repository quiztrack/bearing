import { ComplexStyleRule, style, styleVariants } from "@vanilla-extract/css";
import { StatusType } from "../types";

const alertPanelBorderStyle = style({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  padding: "16px",
  textAlign: "center",
});

const alertPanelStyle = style({
  width: "100%",
  maxWidth: "270px",
  maxHeight: "inherit",
  backgroundColor: "#ffffffD1",
  backgroundBlendMode: "color-dodge",
  borderRadius: "14px",
  boxSizing: "border-box",
  backdropFilter: "blur(40px)",
  paddingTop: "19px",
  paddingBottom: "0px",
  overflowX: "hidden",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  overflowY: "hidden",
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "S007AFFF PRO",
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
  userSelect: "none",
});

const alertActionConfirmButtonStyle = style({
  fontWeight: "590",
});

const alertActionCancelButtonStyle = style({
  fontWeight: "400",
});

const alertActionAdditionalButtonStyle = style({
  fontWeight: "400",
});

const textType = styleVariants<{
  [key in StatusType]: ComplexStyleRule;
}>({
  faild: {
    color: "#FF3B30",
  },
  success: {
    color: "#007AFF",
  },
  warn: {
    color: "",
  },
});

const selectText = style({
  userSelect: "text",
});

const selectNone = style({
  userSelect: "none",
});

export {
  alertPanelBorderStyle,
  alertPanelStyle,
  alertPanelTitleStyle,
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
  alertActionCancelButtonStyle,
  alertActionAdditionalButtonStyle,
  textType,
  selectText,
  selectNone,
};
