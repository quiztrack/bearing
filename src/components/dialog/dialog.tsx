import { Dialog as HeadlessUIDialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { Message } from "./message";
import { Action } from "./action";
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
  dialogPanelBorderStyle,
  panelEnterFromStyle,
  panelEnterStyle,
  panelEnterToStyle,
  panelLeaveStyle,
  panelLeaveFromStyle,
  panelLeaveToStyle,
  dialogPanelStyle,
  dialogPanelTitleStyle,
  dialogPanelTextBorderStyle,
} from "./style.css";
import { UseIcon } from "./use-icon";
// import { clnc } from "@eqpoqpe/classname-utils";

type DialogProps = {
  type?: "tips" | "help" | "question" | "none";
  on: boolean;
  title?: string;
  contents: ReactNode[];
  icon?: ReactNode;
};

function Dialog(props: DialogProps) {
  const { on, contents, title, type, icon } = props;

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

        <div className={dialogPanelBaseStyle}>
          <div className={dialogPanelBorderStyle}>
            <Transition.Child
              as={Fragment}
              enter={panelEnterStyle}
              enterFrom={panelEnterFromStyle}
              enterTo={panelEnterToStyle}
              leave={panelLeaveStyle}
              leaveFrom={panelLeaveFromStyle}
              leaveTo={panelLeaveToStyle}
            >
              <HeadlessUIDialog.Panel className={dialogPanelStyle}>
                <UseIcon type={type} icon={icon} />
                <div className={dialogPanelTextBorderStyle}>
                  <HeadlessUIDialog.Title
                    as="h3"
                    className={dialogPanelTitleStyle}
                  >
                    {title}
                  </HeadlessUIDialog.Title>
                  <Message contents={contents} />
                </div>

                <Action />
              </HeadlessUIDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessUIDialog>
    </Transition>
  );
}

export { type DialogProps, Dialog };
