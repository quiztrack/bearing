import { clnc } from "@eqpoqpe/classname-utils";
import { AlertProps } from "./alert";
import {
  dialogPanelMessageBase,
  dialogPanelMessageContentStyle,
  selectNone,
  selectText,
} from "./style.css";
import { Key, ReactNode, isValidElement } from "react";

type MessageProps = Pick<AlertProps, "contents" | "userSelect">;

const renderMessageContent = (content?: ReactNode) => {
  if (isValidElement(content)) {
    return content;
  } else {
    return <p className={dialogPanelMessageContentStyle}>{content}</p>;
  }
};
function Message({ contents, userSelect }: MessageProps) {
  return (
    <div
      className={clnc([
        dialogPanelMessageBase,
        userSelect === "select-text" ? selectText : selectNone,
      ])}
    >
      {contents?.map((content, index) => {
        return <div key={index}>{renderMessageContent(content)}</div>;
      })}
    </div>
  );
}

export { Message };
