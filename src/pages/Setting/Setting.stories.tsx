import React from "react";
import { Meta, Story } from "@storybook/react";
import Setting, { Props } from "./Setting";

export default {
  title: "Setting/views",
  component: Setting,
} as Meta<Props>;

const Template: Story<Props> = (args) => <Setting {...args} />;

export const 기본 = Template.bind({});
