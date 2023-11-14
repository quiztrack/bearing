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
import { clnc } from "@eqpoqpe/classname-utils";

type DialogProps = PropsWithChildren<{
  on: boolean;
  backdrop?: boolean;
  backdropBackdround?: string;
  onClose?: () => void;
}>;

function Dialog(props: DialogProps) {
  const { on, children, backdrop, backdropBackdround, onClose } = props;
  const handleBackdropClose = () => {
    if (backdrop) onClose?.();
  };

  return (
    <Transition appear show={on} as={Fragment}>
      <HeadlessUIDialog
        as="div"
        className={dialogBaseStyle}
        onClose={handleBackdropClose}
      >
        <Transition.Child
          as={Fragment}
          enter={backdropEnterStyle}
          enterFrom={backdropEnterFromStyle}
          enterTo={backdropEnterToStyle}
          leave={backdropLeaveStyle}
          leaveFrom={backdropLeaveFromStyle}
          leaveTo={backdropLeaveToStyle}
        >
          <div
            className={clnc([
              backdropBackdround ? backdropBackdround : backdropBaseStyle,
            ])}
            aria-hidden="true"
          ></div>
        </Transition.Child>

        <div className={dialogPanelBaseStyle}>{children}</div>
      </HeadlessUIDialog>
    </Transition>
  );
}

export { type DialogProps, Dialog };
