import React from "react";
import { Meta, Story } from "@storybook/react";
import SeaDay from "./SeaDay";

export default {
  title: "Main/components/sea",
  component: SeaDay,
} as Meta;

const Template: Story = (args) => <SeaDay {...args} />;

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
