import { Meta, Story } from "@storybook/react";
import Map01View from "./Map01";
import Map02View from "./Map02";
import Map03View from "./Map03";

export default {
  title: "Main/components/map",
} as Meta;

const Template1: Story = (args) => <Map01View {...args} />;
export const 지도1 = Template1.bind({});

const Template2: Story = (args) => <Map02View {...args} />;
export const 지도2 = Template2.bind({});

const Template3: Story = (args) => <Map03View {...args} />;
export const 지도3 = Template3.bind({});
