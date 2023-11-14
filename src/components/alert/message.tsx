import { clnc } from "@eqpoqpe/classname-utils";
import { AlertProps } from "./alert";
import {
  dialogPanelMessageBase,
  dialogPanelMessageContentStyle,
  selectNone,
  selectText,
} from "./style.css";
import { isValidElement } from "react";

type MessageProps = Pick<AlertProps, "contents" | "userSelect">;

function Message({ contents, userSelect }: MessageProps) {
  return (
    <div className={dialogPanelMessageBase}>
      {contents?.map(content => {
        if (isValidElement(content)) {
          return content;
        } else {
          return (
            <p
              className={clnc([
                dialogPanelMessageContentStyle,
                userSelect === "select-text" ? selectText : selectNone,
              ])}
            >
              {content}
            </p>
          );
        }
      })}
    </div>
  );
}

export { Message };
