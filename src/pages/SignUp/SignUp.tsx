import { Button } from "components/common/Button";
import { InputText } from "components/common/InputText";
import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

import './signUp.css';

export interface SignUpProps {
  isJoined?: boolean;
}

const SignUp = ({
  isJoined = true
}: SignUpProps) => {

  const navigate = useNavigate();

  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(!isJoined ? "warning" : "normal")
  const [stateValues, setStateValues] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const test = () => {
    console.log("회원가입 테스트");
  }

  return (
    <div className='signUp-wrap'>
      <Button
        size='backBtn'
        onClick={() => navigate(-1)}
      />
      <div className='input-comp-wrap' onFocus={() => setModeValue('focus')} onBlur={() => setModeValue('normal')}>
        <InputText
          type='text'
          inputId="signUpNickNm"
          mode={modeValue as "normal" | "warning" | "focus"}
          widthSize="medium"
          placeholder='닉네임'
          onChangeValue={(value: string) =>
            setStateValues({ ...stateValues, email: value})
          }
        />
        <InputText
          type='password'
          inputId="signUpPw"
          mode={modeValue as "normal" | "warning" | "focus"}
          widthSize="medium"
          placeholder='비밀번호'
          onChangeValue={(value: string) =>
            setStateValues({ ...stateValues, password: value })
          }
        />
        <InputText
          type='password'
          inputId="signUpPwConfirm"
          mode={modeValue as "normal" | "warning" | "focus"}
          widthSize="medium"
          placeholder='비밀번호 확인'
          onChangeValue={(value: string) =>
            setStateValues({ ...stateValues, passwordConfirm: value })
          }
        />
      </div>
      <div className='signUp-btn-wrap'>
        <Button size='bottom' label='회원가입' onClick={test} />
      </div>
    </div>
  );
};

export default SignUp;
