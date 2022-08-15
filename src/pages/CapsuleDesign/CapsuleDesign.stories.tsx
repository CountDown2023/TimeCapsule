import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CapsuleDesign from "./CapsuleDesign";

export default {
  title: "Page/CapsuleDesign",
  component: CapsuleDesign,
} as ComponentMeta<typeof CapsuleDesign>;

const Template: ComponentStory<typeof CapsuleDesign> = (args) => (
  <CapsuleDesign />
);

export const Default = Template.bind({});
