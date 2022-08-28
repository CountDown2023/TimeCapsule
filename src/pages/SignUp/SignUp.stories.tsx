import { Meta, Story } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import SignUp, { SignUpProps } from './SignUp';

export default {
  title: 'User/SignUp',
  component: SignUp,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<SignUpProps>;

const Template: Story<SignUpProps> = (args) => <SignUp {...args}/>;

export const 기본 = Template.bind({});
기본.args = {
  isJoined : true
};

export const 텍스트창_포커스 = Template.bind({});
텍스트창_포커스.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('textbox');
  await userEvent.click(loginButton);
};

export const 회원가입_실패 = Template.bind({});
회원가입_실패.args = {
  isJoined : false
};
