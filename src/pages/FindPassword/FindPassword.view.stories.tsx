import { Meta, Story } from '@storybook/react';
import FindPasswordView, { FindPwdProps } from './FindPassword.view';

export default {
  title: 'User/Password/FindPassword',
  component: FindPasswordView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<FindPwdProps>;

const Template: Story<FindPwdProps> = (args) => <FindPasswordView {...args}/>;

export const 기본 = Template.bind({});
기본.args = {
  isFailed: false
};

export const 비밀번호_찾기_실패 = Template.bind({});
비밀번호_찾기_실패.args = {
  isFailed : true
};
