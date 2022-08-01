import React from 'react';
import { ComponentStory, ComponentMeta, Meta, Story } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import SignIn, { Props } from './SignIn';

export default {
  title: 'Page/SignIn',
  component: SignIn,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<Props>;

const Template: ComponentStory<Props> = (args) => <SignIn {...args}/>;

export const 기본 = Template.bind({});

export const 텍스트창_포커스 = Template.bind({});

export const 로그인_실패 = Template.bind({});
로그인_실패.args = {
  isLogedIn : false
};
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

텍스트창_포커스.play = async ({ canvasElement }) => {
  
};
// 기본.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('button', { name: /로그인/i });
//   await userEvent.click(loginButton);
// };
