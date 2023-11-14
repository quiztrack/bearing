import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertProps } from "./alert";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const meta: Meta<AlertProps> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {},
};

type Story = StoryObj<AlertProps>;

export default meta;

export const Default: Story = {
  args: {
    on: true,
    title: "A Short Title Is Best",
    contents: [
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
      "A message should be a short, complete sentence.",
    ],
    // backdropBackdround: "--",
    additionalText: "Action",
    cancelText: "Action",
    confirmText: <ArrowPathIcon width={22} height={22} />,
    showAdditional: true,
    showCancel: true,
    additionalType: "faild",
    cancelType: "success",
    confirmType: "success",
    userSelect: "select-none",
  },
  render: props => <Alert {...props} />,
};
