import React from "react";
import { Meta, Story } from "@storybook/react";
import Dialog, { Props } from "./Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
  args: {
    isShow: true,
    title: "제목입니다.",
    description: "설명입니다.",
    okButton: "확인",
    cancleButton: "취소",
    useDim: false,
    onClickOkButton: () => {
      alert("확인 클릭");
    },
    onClickCancleButton: () => {
      alert("취소 클릭");
    },
  },
} as Meta<Props>;

const Template: Story<Props> = (args) => <Dialog {...args} />;

export const 기본 = Template.bind({});

export const 확인버튼만 = Template.bind({});
확인버튼만.args = {
  cancleButton: undefined,
  onClickCancleButton: undefined,
};

export const 버튼없음 = Template.bind({});
버튼없음.args = {
  cancleButton: undefined,
  okButton: undefined,
  onClickOkButton: undefined,
  onClickCancleButton: undefined,
};

export const 설명없음 = Template.bind({});
설명없음.args = {
  description: undefined,
};

export const 배경있음 = Template.bind({});
배경있음.args = {
  useDim: true,
};
