import { clnc } from "@eqpoqpe/classname-utils";
import {
  alertActionAdditionalButtonStyle,
  alertActionBaseStyle,
  alertActionButtonStyle,
  alertActionCancelButtonStyle,
  alertActionConfirmButtonStyle,
  textType,
} from "./style.css";
import { AlertProps } from ".";

type ActionProps = {} & Pick<
  AlertProps,
  | "disturb"
  | "confirmText"
  | "cancelText"
  | "additionalText"
  | "userSelect"
  | "showCancel"
  | "showAdditional"
  | "confirmType"
  | "cancelType"
  | "additionalType"
>;

function Action(props: ActionProps) {
  const {
    disturb,
    additionalText,
    additionalType,
    cancelText,
    cancelType,
    confirmText,
    confirmType,
    showAdditional,
    showCancel,
  } = props;

  if (disturb) {
    return (
      <div className={alertActionBaseStyle}>
        <button
          type="button"
          className={clnc([
            alertActionButtonStyle,
            alertActionConfirmButtonStyle,
            textType[confirmType ?? "success"],
          ])}
        >
          {confirmText}
        </button>
        {showCancel && (
          <button
            type="button"
            className={clnc([
              alertActionButtonStyle,
              alertActionCancelButtonStyle,
              textType[cancelType ?? "success"],
            ])}
          >
            {cancelText}
          </button>
        )}
        {showAdditional && showCancel && (
          <button
            type="button"
            className={clnc([
              alertActionButtonStyle,
              alertActionAdditionalButtonStyle,
              textType[additionalType ?? "success"],
            ])}
          >
            {additionalText}
          </button>
        )}
      </div>
    );
  } else {
    return undefined;
  }
}

export { Action };
