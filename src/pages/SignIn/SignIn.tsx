import React from "react";
import { useNavigate } from "react-router-dom";

import { InputTxt } from "components/common/InputTxt";
import { Button } from "components/common/Button";

import "./signIn.css";

const SignIn = () => {
  let navigate = useNavigate();

  return (
    <div className='signIn-wrap'>
      <div className='logo-wrap'>
        <div className='logo'>
          <p className='logo-txt'>logo</p>
        </div>
      </div>
      <div className='input-comp-wrap'>
        <InputTxt type='text' size='medium' placeholder='닉네임' />
        <InputTxt type='password' size='medium' placeholder='비밀번호' />
        <Button
          size='medium'
          label='비밀번호 찾기'
          onClick={() => navigate("/user/password")}
        />
        |
        <Button
          size='medium'
          label='회원가입'
          onClick={() => navigate("/user/password")}
        />
      </div>
      <div className='signIn-btn-wrap'>
        <Button size='bottom' label='로그인' />
      </div>
    </div>
  );
};

export default SignIn;
