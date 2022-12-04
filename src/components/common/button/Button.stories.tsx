import { Meta, Story } from "@storybook/react";
import Button, { Props } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "버튼",
  },
} as Meta<Props>;

const Template: Story<Props> = (args) => <Button {...args} />;

export const small = Template.bind({});
small.args = {
  size: "small",
};

export const medium = Template.bind({});

export const large = Template.bind({});
large.args = {
  size: "large",
};

export const bottom = Template.bind({});
bottom.args = {
  size: "bottom",
};

export const disabled = Template.bind({});
disabled.args = {
  size: "bottom",
  isDisabled: true,
};

export const primary = Template.bind({});
primary.args = {
  theme: "primary",
};

export const secondary = Template.bind({});
