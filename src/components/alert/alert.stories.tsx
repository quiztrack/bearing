import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertProps } from "./alert";
import { ArrowPathIcon, HandRaisedIcon } from "@heroicons/react/24/solid";
import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid";

const meta: Meta<AlertProps> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {},
};

type Story = StoryObj<AlertProps>;

export default meta;
export const Basic: Story = {
  args: {
    on: true,
    type: "help",
    title: "A Short Title Is Best",
    contents: [
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0px",
        }}
      >
        <p style={{ fontSize: "13px", margin: "0px 5px" }}>Try press</p>
        "<HandRaisedIcon width={17} height={17} color="#999" />" or "
        <ArrowPathIcon width={17} height={17} color="#999" />" and go.
      </div>,
    ],
    backdropBackdround: "",
    backdrop: true,
    additionalText: <>Abort</>,
    cancelText: "Cancel",
    confirmText: "Confirm",
    showAdditional: true,
    showCancel: true,
    additionalType: "faild",
    cancelType: "success",
    confirmType: "success",
    userSelect: "select-none",
    disabledAdditional: false,
    disabledCancel: false,
    disabledConfirm: false,
    onClose(result) {
      const { additional, backdrop, cancel, confirm } = result;
    },
  },
  render: props => <Alert {...props} />,
};
export const Scrolling: Story = {
  args: {
    on: true,
    type: "help",
    title: "A Short Title Is Best",
    contents: [
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0px",
        }}
      >
        <p style={{ fontSize: "13px", margin: "0px 5px" }}>Try press</p>
        "<HandRaisedIcon width={17} height={17} color="#999" />" or "
        <ArrowPathIcon width={17} height={17} color="#999" />" and go.
      </div>,
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0px",
        }}
      >
        <p style={{ fontSize: "13px", margin: "0px 5px" }}>Try, scroll up</p>
        "<ChevronDoubleUpIcon width={17} height={17} color="#999" />" read more.
      </div>,
    ],
    backdropBackdround: "",
    additionalText: <>Abort</>,
    cancelText: "Cancel",
    confirmText: "Confirm",
    showAdditional: true,
    showCancel: true,
    additionalType: "faild",
    cancelType: "success",
    confirmType: "success",
    userSelect: "select-none",
  },
  render: props => <Alert {...props} />,
};
