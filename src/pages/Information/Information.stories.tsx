import React from "react";
import { Meta, Story } from "@storybook/react";
import Information from "./Information";

export default {
  title: "ETC/Information",
  component: Information,
} as Meta;

const Template: Story = (args) => <Information {...args} />;

export const 기본 = Template.bind({});
