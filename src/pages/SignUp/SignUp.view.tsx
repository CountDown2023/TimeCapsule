import InputText from "components/common/inputText";
import InputForm from "components/common/InputForm";
import React, { useState } from "react";

import './signUp.css';

export interface SignUpProps {
  isJoined?: boolean;
  clickSubmit: (data: {email: string, password: string, passwordConfirm: string}) => void;
}

const SignUpView = ({
  isJoined = true,
  clickSubmit
}: SignUpProps) => {

  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(!isJoined ? "warning" : "normal")
  const [stateValues, setStateValues] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const handleButtonEvent = () => {
    clickSubmit(stateValues);
  }


  return (
    <InputForm 
      showBackBtn={true} 
      onClickBackBtn={true}
      submitButtonText={"회원가입"}
      disabledSubmitButton={true}
      onSubmit={handleButtonEvent}
    >
      <div className='signUp-wrap'>
        <div className='input-comp-wrap' onFocus={() => setModeValue('focus')} onBlur={() => setModeValue('normal')}>
          <InputText
            type='text'
            inputId="signUpNickNm"
            mode={modeValue}
            widthSize="medium"
            placeholder='닉네임'
            onChangeValue={(value: string) =>
              setStateValues({ ...stateValues, email: value})
            }
          />
          <InputText
            type='password'
            inputId="signUpPw"
            mode={modeValue}
            widthSize="medium"
            placeholder='비밀번호'
            onChangeValue={(value: string) =>
              setStateValues({ ...stateValues, password: value })
            }
          />
          <InputText
            type='password'
            inputId="signUpPwConfirm"
            mode={modeValue}
            widthSize="medium"
            placeholder='비밀번호 확인'
            onChangeValue={(value: string) =>
              setStateValues({ ...stateValues, passwordConfirm: value })
            }
          />
        </div>
      </div>
    </InputForm>
  );
};

export default SignUpView;
