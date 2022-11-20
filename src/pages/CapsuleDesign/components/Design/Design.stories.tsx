import React from "react";
import { Story, Meta } from "@storybook/react";

import Design from "./Design";

export default {
  title: "Page/CapsuleDesign/components/design",
  component: Design,
} as Meta;

const Template: Story = () => <Design />;

export const 기본 = Template.bind({});
