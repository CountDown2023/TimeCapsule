import React, { useState } from "react";
import InputText from "components/common/inputText";
import InputForm from "components/common/InputForm";

import { useNavigate } from 'react-router-dom';

import './newPassword.css';

export interface NewPwdProps {
  isFailed?: boolean;
}

const NewPassword = ({
  isFailed = false
}:NewPwdProps) => {

  const navigate = useNavigate();

  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(isFailed ? "warning" : "normal")
  const [stateValues, setStateValues] = useState({
    newPwd: "",
    newPwdConfirm: ""
  });

  const clickSubmit = () => {
    console.log("비밀번호 수정 테스트");
    console.log("newPwd : ", stateValues.newPwd);
    console.log("newPwdConfirm : ", stateValues.newPwdConfirm);

    //TODO: 비밀번호 확인 API 연동 로직 구현

  }

  return (
    <InputForm 
      showBackBtn={true} 
      onClickBackBtn={true}
      submitButtonText={"비밀번호 수정"}
      disabledSubmitButton={true}
      onSubmit={clickSubmit}
    >
      <div className='newPwd-wrap'>
        <div className='input-comp-wrap' onFocus={() => setModeValue('focus')} onBlur={() => setModeValue('normal')}>
          <InputText
            type='password'
            inputId="newPwd"
            mode={(modeValue == 'warning')?'normal' : modeValue}
            widthSize="medium"
            placeholder='새 비밀번호'
            onChangeValue={(value: string) =>
              setStateValues({ ...stateValues, newPwd: value})
            }
          />
          <InputText
            type='password'
            inputId="newPwdConfirm"
            mode={modeValue}
            widthSize="medium"
            placeholder='새 비밀번호 확인'
            onChangeValue={(value: string) =>
              setStateValues({ ...stateValues, newPwdConfirm: value})
            }
          />
        </div>
      </div>
    </InputForm>
  );
};

export default NewPassword;
