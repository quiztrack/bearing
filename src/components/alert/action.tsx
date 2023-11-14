import { clnc } from "@eqpoqpe/classname-utils";
import {
  alertActionBaseStyle,
  alertActionButtonStyle,
  alertActionConfirmButtonStyle,
} from "./style.css";
import { AlertProps } from ".";

type ActionProps = {} & Pick<AlertProps, "disturb">;

function Action(props: ActionProps) {
  const { disturb } = props;

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
          Action
        </button>
        <button type="button" className={alertActionButtonStyle}>
          Action
        </button>
      </div>
    );
  } else {
    return undefined;
  }
}

export { Action };
