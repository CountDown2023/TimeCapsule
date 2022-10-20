import React from "react";
import { Meta, Story } from "@storybook/react";
import Loading, { Props } from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
  args: {},
} as Meta<Props>;

const Template: Story<Props> = (args) => <Loading {...args} />;

export const 전체화면_배경있음 = Template.bind({});
전체화면_배경있음.args = {
  isFull: true,
  hasDarkBackground: true,
};

export const 전체화면_배경없음 = Template.bind({});
전체화면_배경없음.args = {
  isFull: true,
};

export const 부분화면_배경있음 = Template.bind({});
부분화면_배경있음.args = {
  hasDarkBackground: true,
};

export const 부분화면_배경없음 = Template.bind({});