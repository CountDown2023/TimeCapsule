import React, { useEffect, useState } from "react";
import InputText from "components/common/inputText";
import InputForm from "components/common/InputForm";

import './newPassword.css';

export interface NewPwdProps {
  isFailed?: boolean;
  onSubmit: (data: {newPwd: string, newPwdConfirm: string}) => void
}

const NewPasswordView = ({
  isFailed = false,
  onSubmit
}:NewPwdProps) => {

  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(isFailed ? "warning" : "normal")
  const [stateValues, setStateValues] = useState({
    newPwd: "",
    newPwdConfirm: ""
  });

  const handleClickEvent = () => {
    onSubmit(stateValues);
  }

  useEffect(() => {
    setModeValue(isFailed ? "warning" : "normal");
  }, [isFailed])

  
  return (
    <InputForm 
      showBackBtn={true} 
      onClickBackBtn={true}
      submitButtonText={"비밀번호 수정"}
      disabledSubmitButton={true}
      onSubmit={handleClickEvent}
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

export default NewPasswordView;
