import { Meta, StoryObj } from "@storybook/react";
import { Image, ImageProps } from "./image";

const meta: Meta<ImageProps> = {
  title: "Components/Image",
  component: Image,
  argTypes: {},
};

type Story = StoryObj<ImageProps>;

export default meta;

export const Default: Story = {
  args: {
    fallback: <div>loading...</div>,
    src: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  render: props => <Image {...props} />,
};
