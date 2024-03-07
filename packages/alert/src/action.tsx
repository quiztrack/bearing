import { clnc } from "@eqpoqpe/classname-utils";
import {
  alertActionAdditionalButtonStyle,
  alertActionBaseStyle,
  alertActionButtonContentSpanStyle,
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
  | "onClose"
  | "disabledAdditional"
  | "disabledCancel"
  | "disabledConfirm"
>;

export function Action(props: ActionProps) {
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
    disabledAdditional,
    disabledCancel,
    disabledConfirm,
    onClose,
  } = props;
  const handleConfirmClose = () => {
    onClose?.({
      additional: false,
      backdrop: false,
      cancel: false,
      confirm: true,
    });
  };
  const handleCancelClose = () => {
    onClose?.({
      additional: false,
      backdrop: false,
      cancel: true,
      confirm: false,
    });
  };
  const handleAdditionalClose = () => {
    onClose?.({
      additional: true,
      backdrop: false,
      cancel: false,
      confirm: false,
    });
  };

  if (disturb) {
    return (
      <div className={alertActionBaseStyle}>
        <button
          type="button"
          className={clnc([
            alertActionButtonStyle,
            alertActionConfirmButtonStyle,
            textType[confirmType ?? "success"],
            disabledConfirm ? "disabled" : "",
          ])}
          onClick={handleConfirmClose}
          disabled={disabledConfirm}
        >
          <span
            className={clnc([
              alertActionButtonContentSpanStyle,
              disabledConfirm ? "disabled" : "",
            ])}
          >
            {confirmText}
          </span>
        </button>
        {showCancel && (
          <button
            type="button"
            className={clnc([
              alertActionButtonStyle,
              alertActionCancelButtonStyle,
              textType[cancelType ?? "success"],
              disabledCancel ? "disabled" : "",
            ])}
            onClick={handleCancelClose}
            disabled={disabledCancel}
          >
            <span
              className={clnc([
                alertActionButtonContentSpanStyle,
                disabledCancel ? "disabled" : "",
              ])}
            >
              {cancelText}
            </span>
          </button>
        )}
        {showAdditional && showCancel && (
          <button
            type="button"
            className={clnc([
              alertActionButtonStyle,
              alertActionAdditionalButtonStyle,
              textType[additionalType ?? "success"],
              disabledAdditional ? "disabled" : "",
            ])}
            onClick={handleAdditionalClose}
            disabled={disabledAdditional}
          >
            <span
              className={clnc([
                alertActionButtonContentSpanStyle,
                disabledAdditional ? "disabled" : "",
              ])}
            >
              {additionalText}
            </span>
          </button>
        )}
      </div>
    );
  } else {
    return undefined;
  }
}
