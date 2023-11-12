import { button } from "./style.css";

type DialogProps = {};

function Dialog(props: DialogProps) {
  return (
    <div className={button}>
      dialog
    </div>
  );
}

export { type DialogProps, Dialog };
