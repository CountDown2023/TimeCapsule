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
  unknownCapsule: {
    title: "제목이요",
    contents: ["자격증 따기", "요리 학원 다니기"],
  },
  hasCapsule: true,
  showDescription: false,
};

export const 캡슐_없음 = Template.bind({});
캡슐_없음.args = {
  hasCapsule: false,
  showDescription: false,
};

export const 캡슐_생성_후 = Template.bind({});
캡슐_생성_후.args = {
  hasCapsule: true,
  showDescription: true,
};
