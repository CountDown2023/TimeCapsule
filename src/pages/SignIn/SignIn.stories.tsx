import { Meta, Story } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import SignIn, { Props } from './SignIn';

export default {
  title: 'User/SignIn',
  component: SignIn,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<Props>;

const Template: Story<Props> = (args) => <SignIn {...args}/>;

export const 기본 = Template.bind({});
기본.args = {
  isLoggedIn: true
};

export const 텍스트창_포커스 = Template.bind({});
텍스트창_포커스.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('textbox');
  await userEvent.click(loginButton);
};

export const 로그인_실패 = Template.bind({});
로그인_실패.args = {
  isLoggedIn : false
};
