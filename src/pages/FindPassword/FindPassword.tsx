import React, { useState } from "react";
import InputText from "components/common/inputText";
import InputForm from "components/common/InputForm";

import { useNavigate } from 'react-router-dom';

import './findPassword.css';

export interface FindPwdProps {
  isFailed?: boolean;
}

const FindPassword = ({
  isFailed = false
}: FindPwdProps) => {

  const navigate = useNavigate();

  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(isFailed ? "warning" : "normal")
  const [stateValues, setStateValues] = useState({
    nickname: "",
    email: ""
  });

  const clickSubmit = () => {
    console.log("비밀번호 찾기 테스트");
    console.log("nickname : ", stateValues.nickname);
    console.log("email : ", stateValues.email);

    //TODO: 비밀번호 확인 API 연동 로직 구현

  }

  return (
    <InputForm 
      showBackBtn={true} 
      onClickBackBtn={true}
      submitButtonText={"비밀번호 찾기"}
      disabledSubmitButton={true}
      onSubmit={clickSubmit}
    >
      <div className='signUp-wrap'>
        <div className='input-comp-wrap' onFocus={() => setModeValue('focus')} onBlur={() => setModeValue('normal')}>
          <InputText
            type='text'
            inputId="findNickname"
            mode={modeValue}
            widthSize="medium"
            placeholder='닉네임'
            onChangeValue={(value: string) =>
              setStateValues({ ...stateValues, nickname: value})
            }
          />
          <InputText
            type='text'
            inputId="findEmail"
            mode={modeValue}
            widthSize="medium"
            placeholder='안내 받을 이메일'
            onChangeValue={(value: string) =>
              setStateValues({ ...stateValues, email: value })
            }
          />
        </div>
      </div>
    </InputForm>
  );
};

export default FindPassword;
