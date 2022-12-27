import InputText from "../../components/common/inputText";
import InputForm from "../../components/common/InputForm";
import { useEffect, useState } from "react";
import { SignUpForm } from "./SignUp";

import "./signUp.css";

export interface SignUpProps {
  isError: boolean;
  clickSubmit: (data: SignUpForm) => void;
}

const SignUpView = ({ isError, clickSubmit }: SignUpProps) => {
  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(
    isError ? "warning" : "normal"
  );
  const [stateValues, setStateValues] = useState<SignUpForm>({
    nickname: "",
    password: "",
    passwordConfirm: "",
  });

  const handleButtonEvent = () => {
    clickSubmit(stateValues);
  };

  useEffect(() => {
    setModeValue(isError ? "warning" : "normal");
  }, [isError]);

  return (
    <InputForm
      showBackBtn={true}
      submitButtonText="회원가입"
      //TODO: 비밀번호/비밀번호 확인 validation 체크 로직 구현
      disabledSubmitButton={
        stateValues.nickname.length === 0 ||
        stateValues.password.length === 0 ||
        stateValues.password !== stateValues.passwordConfirm
      }
      onSubmit={handleButtonEvent}
    >
      <div className="signUp-wrap">
        <div
          className="input-comp-wrap"
          onFocus={() => setModeValue("focus")}
          onBlur={() => setModeValue("normal")}
        >
          <InputText
            type="text"
            inputId="signUpNickNm"
            mode={modeValue}
            widthSize="medium"
            placeholder="닉네임"
            onChangeValue={(value: string) =>
              setStateValues({ ...stateValues, nickname: value })
            }
          />
          <InputText
            type="password"
            inputId="signUpPw"
            mode={modeValue}
            widthSize="medium"
            placeholder="비밀번호"
            onChangeValue={(value: string) =>
              setStateValues({ ...stateValues, password: value })
            }
          />
          <InputText
            type="password"
            inputId="signUpPwConfirm"
            mode={modeValue}
            widthSize="medium"
            placeholder="비밀번호 확인"
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
