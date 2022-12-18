import { Meta, Story } from "@storybook/react";
import SeaDay from "./SeaDay";
import SeaNight from "./SeaNight";

export default {
  title: "Main/components/sea",
} as Meta;

const Template1: Story = (args) => <SeaDay {...args} />;
export const 낮 = Template1.bind({});

const Template2: Story = (args) => <SeaNight {...args} />;
export const 밤 = Template2.bind({});
