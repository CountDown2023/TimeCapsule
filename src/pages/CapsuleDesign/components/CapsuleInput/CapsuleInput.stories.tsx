import React from "react";
import { Story, Meta } from "@storybook/react";

import CapsuleInput from "./CapsuleInput";

export default {
  title: "Capsule/CapsuleDesign/components/capsuleInput",
  component: CapsuleInput,
} as Meta;

const Template: Story = () => <CapsuleInput />;

export const 기본 = Template.bind({});
