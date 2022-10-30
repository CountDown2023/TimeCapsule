import React from "react";
import { Meta, Story } from "@storybook/react";
import SeaDay from "./SeaDay";

export default {
  title: "Main/components/sea",
  component: SeaDay,
} as Meta;

const Template: Story = (args) => <SeaDay {...args} />;

export const 낮 = Template.bind({});