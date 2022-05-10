import React from "react";

import { InputTxt } from "components/common/InputTxt"
import { Button } from "components/common/Button"

import "./signIn.css"

const SignIn = () => {
  return (
    <div className="signIn-wrap">
      <div className="logo-wrap">
        <div className="logo">
          <p className="logo-txt">
           logo
          </p>
        </div>
      </div>
      <div className="input-comp-wrap">
        <InputTxt type="text" size="medium" placeholder="닉네임" />
        <InputTxt type="password" size="medium" placeholder="비밀번호" />

        <Button size="medium" label="비밀번호 찾기" />&nbsp; | &nbsp;
        <Button size="medium" label="회원가입" />
      </div>
      <div className="signIn-btn-wrap">
        <Button size="bottom" label="로그인" />
      </div>
    </div>
  );
};

export default SignIn;
