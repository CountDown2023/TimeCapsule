import React from "react";
import { Meta, Story } from "@storybook/react";
import Dialog, { Props } from "./Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as Meta<Props>;

const Template: Story<Props> = (args) => <Dialog {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  isShow: true,
  title: "제목입니다.",
  description: "설명입니다.",
  okButton: "확인",
  cancleButton: "취소",
  onClickOkButton: () => {
    alert("확인 클릭");
  },
  onClickCancleButton: () => {
    alert("취소 클릭");
  },
};

export const 확인버튼 = Template.bind({});
확인버튼.args = {
  isShow: true,
  title: "제목입니다.",
  description: "설명입니다.",
  okButton: "확인",
  onClickOkButton: () => {
    alert("확인 클릭");
  },
};

export const 버튼없음 = Template.bind({});
버튼없음.args = {
  isShow: true,
  title: "제목입니다.",
  description: "설명입니다.",
};

export const 설명없음 = Template.bind({});
설명없음.args = {
  isShow: true,
  title: "제목입니다.",
};
