import { clnc } from "@eqpoqpe/classname-utils";
import {
  alertActionAdditionalButtonStyle,
  alertActionBaseStyle,
  alertActionButtonStyle,
  alertActionCancelButtonStyle,
  alertActionConfirmButtonStyle,
} from "./style.css";
import { AlertProps } from ".";

type ActionProps = {} & Pick<
  AlertProps,
  | "disturb"
  | "confirmText"
  | "cancelText"
  | "additionalText"
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
            ])}
          >
            {cancelText}
          </button>
        )}
        {showAdditional && (
          <button
            type="button"
            className={clnc([
              alertActionButtonStyle,
              alertActionAdditionalButtonStyle,
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
