import React from "react";
import { Meta, Story } from "@storybook/react";
import MainSea from "./MainSea";

export default {
  title: "Main/Sea/container",
  component: MainSea,
} as Meta;

const Template: Story = (args) => <MainSea {...args} />;

export const 기본 = Template.bind({});
