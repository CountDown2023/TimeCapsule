import React from "react";
import { Meta, Story } from "@storybook/react";
import Loading, { Props } from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
  args: {},
} as Meta<Props>;

const Template: Story<Props> = (args) => <Loading {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  isFull: true,
  hasDarkBackground: true,
};
