import { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogProps } from "./dialog";

const meta: Meta<DialogProps> = {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {},
};

type Story = StoryObj<DialogProps>;

export default meta;

export const Default: Story = {
  args: {},
  render: props => <Dialog {...props} />,
};