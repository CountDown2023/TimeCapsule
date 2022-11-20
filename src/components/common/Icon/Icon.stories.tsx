import React from "react";
import { Meta, Story } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
} as Meta;

const Template: Story = (args) => <Icon {...args} />;

export const 기본 = Template.bind({});