import { PropsWithChildren } from "react";
import { AlertProps } from ".";
import {
  UserGroupIcon,
  QuestionMarkCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { alertIconBorderStyle } from "./style.css";

type UseIconProps = Pick<AlertProps, "type" | "icon">;

const IconBorder = ({ children }: PropsWithChildren) => (
  <div className={alertIconBorderStyle}>{children}</div>
);

function UseIcon({ type, icon }: UseIconProps) {
  if (icon) {
    return <IconBorder>{icon}</IconBorder>;
  }

  switch (type) {
    case "help":
      return (
        <IconBorder>
          <UserGroupIcon color="#0070f3" width={32} height={32} />
        </IconBorder>
      );

    case "question":
      return (
        <IconBorder>
          <QuestionMarkCircleIcon color="#0070f3" width={32} height={32} />
        </IconBorder>
      );

    case "tips":
      return (
        <IconBorder>
          <ExclamationCircleIcon color="#0070f3" width={32} height={32} />
        </IconBorder>
      );

    default:
      return;
  }
}

export { UseIcon };
