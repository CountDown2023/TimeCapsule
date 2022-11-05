import React, { useState } from "react";
import { InputText } from "components/common/inputText/InputText";
import { InputForm } from "pages/common/InputForm/InputForm";

import { useNavigate } from 'react-router-dom';

import './passwordConfirm.css';

export interface PwdConfirmProps {
  isFailed?: boolean;
}

const PasswordConfirm = ({
  isFailed = false
}: PwdConfirmProps) => {
  
  const navigate = useNavigate();

  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(isFailed ? "warning" : "normal")
  const [stateValues, setStateValues] = useState({
    currentPwd: ""
  });

  const clickSubmit = () => {
    console.log("현재 비밀번호 확인 테스트");
    console.log("currentPwd : ", stateValues.currentPwd);

    //TODO: 비밀번호 확인 API 연동 로직 구현

  }

  return (
    <InputForm 
      showBackBtn={true} 
      onClickBackBtn={true}
      submitButtonText={"확인"}
      disabledSubmitButton={true}
      onSubmit={clickSubmit}
    >
      <div className='pwdConfirm-wrap'>
        <div
          className={['div-info', (modeValue != "normal")? 'div-hidden' : ''].join(' ')}
        >
          <p>본인 확인을 위해</p>
          <p>비밀번호를 입력해주세요</p>
        </div>
        <div className='input-comp-wrap' onFocus={() => setModeValue('focus')} onBlur={() => setModeValue('normal')}>
          <InputText
            type='text'
            inputId="confirmPwd"
            mode={modeValue}
            widthSize="medium"
            placeholder='현재 비밀번호'
            onChangeValue={(value: string) =>
              setStateValues({ currentPwd: value})
            }
          />
        </div>
      </div>
    </InputForm>
  );
};

export default PasswordConfirm;
