import { Meta, Story } from '@storybook/react';
import NewPasswordView, { NewPwdProps } from './NewPassword.view';

export default {
  title: 'User/Password/NewPassword',
  component: NewPasswordView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<NewPwdProps>;

const Template: Story<NewPwdProps> = (args) => <NewPasswordView {...args}/>;

export const 기본 = Template.bind({});
기본.args = {
  isFailed: false
};

export const 비밀번호_변경_실패 = Template.bind({});
비밀번호_변경_실패.args = {
  isFailed : true
};
