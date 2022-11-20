import React from "react";
import { Meta, Story } from "@storybook/react";
import MainSeaView, { Props } from "./MainSea.view";

export default {
  title: "Main/Sea/views",
  component: MainSeaView,
} as Meta<Props>;

const Template: Story<Props> = (args) => <MainSeaView {...args} />;

export const 익명의_캡슐_있음 = Template.bind({});
익명의_캡슐_있음.args = {
  unknownCapsule: "1",
  hasCapsule: true,
  showDescription: false,
};

export const 캡슐_없음 = Template.bind({});
캡슐_없음.args = {
  unknownCapsule: "",
  hasCapsule: false,
  showDescription: false,
};

export const 캡슐_생성_후 = Template.bind({});
캡슐_생성_후.args = {
  unknownCapsule: "",
  hasCapsule: true,
  showDescription: true,
};
