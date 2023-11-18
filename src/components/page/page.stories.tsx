import { Meta, StoryObj } from "@storybook/react";
import { Page, PageProps } from "./page";

const meta: Meta<PageProps> = {
  title: "Components/Page",
  component: Page,
  argTypes: {},
};

type Story = StoryObj<PageProps>;

export default meta;
export const Default: Story = {
  args: {
    scrollingX: "hidden",
    scrollingY: "scrolling",
  },
  render: props => (
    <Page {...props}>
      <div style={{ width: "100%", height: "2000px" }}></div>
    </Page>
  ),
};
