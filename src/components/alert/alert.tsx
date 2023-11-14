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
} from "./style.css";
import { Fragment, ReactNode } from "react";
import { Dialog, DialogProps } from "../dialog";
import { UseIcon } from "./use-icon";
import { Action } from "./action";
import { Message } from "./message";

type AlertProps = {
  type?: "tips" | "help" | "question" | "none";
  disturb?: boolean;
  icon?: ReactNode;
  title?: string;
  contents?: ReactNode[];
} & DialogProps;

function Alert(props: AlertProps) {
  const { on, title, type, icon, contents, disturb = true } = props;

  return (
    <Dialog on={on}>
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
              <HeadlessUIDialog.Title as="h3" className={alertPanelTitleStyle}>
                {title}
              </HeadlessUIDialog.Title>
              <Message contents={contents} />
            </div>

            <Action disturb={disturb} />
          </HeadlessUIDialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  );
}

export { type AlertProps, Alert };
