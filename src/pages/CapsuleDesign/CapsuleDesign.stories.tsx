import React from "react";
import { Story, Meta } from "@storybook/react";

import CapsuleDesign from "./CapsuleDesign";

export default {
  title: "Page/CapsuleDesign",
  component: CapsuleDesign,
} as Meta;

const Template: Story = () => <CapsuleDesign />;

export const Default = Template.bind({});
