import { button } from "./style.css";
import { UserGroupIcon } from "@heroicons/react/24/solid";

type DialogProps = {};

function Dialog(props: DialogProps) {
  return (
    <div className={button}>
      <UserGroupIcon />
    </div>
  );
}

export { type DialogProps, Dialog };
