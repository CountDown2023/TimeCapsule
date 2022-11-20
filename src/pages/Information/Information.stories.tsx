import React from "react";
import { Meta, Story } from "@storybook/react";
import InformationView, { Props } from "./Information.view";

export default {
  title: "ETC/Information/views",
  component: InformationView,
  args: {
    onSubmitVoc: (content: string) => console.log(content),
  },
} as Meta;

const Template: Story<Props> = (args) => <InformationView {...args} />;

export const 기본 = Template.bind({});
