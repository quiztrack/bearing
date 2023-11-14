import { AlertProps } from "./alert";
import {
  dialogPanelMessageBase,
  dialogPanelMessageContentStyle,
} from "./style.css";
import { isValidElement } from "react";

type MessageProps = Pick<AlertProps, "contents">;

function Message({ contents }: MessageProps) {
  return (
    <div className={dialogPanelMessageBase}>
      {contents?.map(content => {
        if (isValidElement(content)) {
          return content;
        } else {
          return <p className={dialogPanelMessageContentStyle}>{content}</p>;
        }
      })}
    </div>
  );
}

export { Message };
