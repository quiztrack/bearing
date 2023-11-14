import { Dialog as HeadlessUIDialog, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";
import {
  backdropBaseStyle,
  backdropEnterFromStyle,
  backdropEnterStyle,
  backdropEnterToStyle,
  backdropLeaveStyle,
  backdropLeaveFromStyle,
  backdropLeaveToStyle,
  dialogBaseStyle,
  dialogPanelBaseStyle,
} from "./style.css";

type DialogProps = PropsWithChildren<{
  on: boolean;
}>;

function Dialog(props: DialogProps) {
  const { on, children } = props;

  return (
    <Transition appear show={on} as={Fragment}>
      <HeadlessUIDialog as="div" className={dialogBaseStyle} onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter={backdropEnterStyle}
          enterFrom={backdropEnterFromStyle}
          enterTo={backdropEnterToStyle}
          leave={backdropLeaveStyle}
          leaveFrom={backdropLeaveFromStyle}
          leaveTo={backdropLeaveToStyle}
        >
          <div className={backdropBaseStyle}></div>
        </Transition.Child>

        <div className={dialogPanelBaseStyle}>{children}</div>
      </HeadlessUIDialog>
    </Transition>
  );
}

export { type DialogProps, Dialog };
