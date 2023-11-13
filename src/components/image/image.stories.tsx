import { Meta, StoryObj } from "@storybook/react";
import { Image, ImageProps } from "./image";

const meta: Meta<ImageProps> = {
  title: "Design/Image",
  component: Image,
  argTypes: {},
};

type Story = StoryObj<ImageProps>;

export default meta;

export const Default: Story = {
  args: {
    fallback: <div>loading...</div>,
  },
  render: props => <Image {...props} />,
};
