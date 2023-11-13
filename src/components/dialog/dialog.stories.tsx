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
  args: {
    type: "help",
    on: true,
    title: "A Short Title Is Best",
    contents: [
      "A message should be a short, complete sentence.",
      <p style={{ fontWeight: "bold", fontSize: "13px" }}>
        A message should be a short, complete sentence.
      </p>,
    ],
  },
  render: props => <Dialog {...props} />,
};
