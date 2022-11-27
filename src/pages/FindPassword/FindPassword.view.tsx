import React, { useEffect, useState } from "react";
import InputText from "components/common/inputText";
import InputForm from "components/common/InputForm";

import './findPassword.css';
import { FindPwdForm } from "./FindPassword";

export interface FindPwdProps {
  isFailed?: boolean;
  onSubmit: (data: FindPwdForm) => void;
}

const FindPasswordView = ({
  isFailed = false,
  onSubmit
}: FindPwdProps) => {

  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(isFailed ? "warning" : "normal")
  const [stateValues, setStateValues] = useState<FindPwdForm>({} as FindPwdForm);

  const handleClickEvent = () => {
    onSubmit(stateValues);
  }

  useEffect(() => {
    setModeValue(isFailed ? "warning" : "normal");
  }, [isFailed])

  return (
    <InputForm 
      showBackBtn={true} 
      submitButtonText="비밀번호 찾기"
      disabledSubmitButton={true}
      onSubmit={handleClickEvent}
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

export default FindPasswordView;
