import { Transition, Dialog as HeadlessUIDialog } from "@headlessui/react";
import {
  alertPanelBorderStyle,
  alertPanelStyle,
  alertPanelTextBorderStyle,
  alertPanelTitleStyle,
  panelEnterFromStyle,
  panelEnterStyle,
  panelEnterToStyle,
  panelLeaveFromStyle,
  panelLeaveStyle,
  panelLeaveToStyle,
  selectNone,
} from "./style.css";
import { Fragment, ReactNode } from "react";
import { Dialog, DialogProps } from "../dialog";
import { UseIcon } from "./use-icon";
import { Action } from "./action";
import { Message } from "./message";
import { clnc } from "@eqpoqpe/classname-utils";
import { StatusType } from "../types";

type AlertProps = {
  type?: "tips" | "help" | "question" | "none";
  disturb?: boolean;
  icon?: ReactNode;
  title?: string;
  contents?: ReactNode[];
  userSelect?: "select-none" | "select-text";
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  additionalText?: ReactNode;
  showCancel?: boolean;
  showAdditional?: boolean;
  confirmType?: StatusType;
  cancelType?: StatusType;
  additionalType?: StatusType;
} & Omit<DialogProps, "children">;

function Alert(props: AlertProps) {
  const {
    title,
    type,
    icon,
    contents,
    disturb = true,
    userSelect,
    onClose,
    additionalText,
    additionalType,
    cancelText,
    cancelType,
    confirmText,
    confirmType,
    showAdditional,
    showCancel,
    ...moreProps
  } = props;

  return (
    <Dialog {...moreProps} onClose={onClose}>
      <div className={alertPanelBorderStyle}>
        <Transition.Child
          as={Fragment}
          enter={panelEnterStyle}
          enterFrom={panelEnterFromStyle}
          enterTo={panelEnterToStyle}
          leave={panelLeaveStyle}
          leaveFrom={panelLeaveFromStyle}
          leaveTo={panelLeaveToStyle}
        >
          <HeadlessUIDialog.Panel className={alertPanelStyle}>
            <UseIcon icon={icon} type={type} />

            <div className={alertPanelTextBorderStyle}>
              <HeadlessUIDialog.Title
                as="h3"
                className={clnc([alertPanelTitleStyle, selectNone])}
              >
                {title}
              </HeadlessUIDialog.Title>
              <Message contents={contents} />
            </div>

            <Action
              disturb={disturb}
              additionalText={additionalText}
              additionalType={additionalType}
              cancelText={cancelText}
              cancelType={cancelType}
              confirmText={confirmText}
              confirmType={cancelType}
              showAdditional={showAdditional}
              showCancel={showCancel}
            />
          </HeadlessUIDialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  );
}

export { type AlertProps, Alert };
