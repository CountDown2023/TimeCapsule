import { Meta, Story } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import PasswordConfirmView, { PwdConfirmProps } from './PasswordConfirm.view';

export default {
  title: 'User/Password/PasswordConfirm',
  component: PasswordConfirmView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PwdConfirmProps>;

const Template: Story<PwdConfirmProps> = (args) => <PasswordConfirmView {...args}/>;

export const 기본 = Template.bind({});
기본.args = {
  isFailed: false
};

export const 비밀번호_찾기_실패 = Template.bind({});
비밀번호_찾기_실패.args = {
  isFailed : true
};
