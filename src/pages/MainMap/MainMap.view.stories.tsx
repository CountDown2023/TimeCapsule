import React from "react";
import { Meta, Story } from "@storybook/react";
import MainMapView, { Props } from "./MainMap.view";

export default {
  title: "Main/Map",
  component: MainMapView,
} as Meta;

const Template: Story<Props> = (args) => <MainMapView {...args} />;

export const 캡슐_있음 = Template.bind({});
캡슐_있음.args = {
  days: "10",
};
