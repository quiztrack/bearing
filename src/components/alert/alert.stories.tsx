import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertProps } from "./alert";

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
    contents: ["A message should be a short, complete sentence."],
    // backdropBackdround: "--",
    additionalText: "Action",
    cancelText: "Action",
    confirmText: "Action",
    showAdditional: true,
    showCancel: true,
    additionalType: "faild",
    cancelType: "success",
    confirmType: "success",
  },
  render: props => <Alert {...props} />,
};
