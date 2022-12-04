import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputText from "../../components/common/inputText";
import Button from "../../components/common/button";
import InputForm from "../../components/common/InputForm";
import Icon from "components/common/Icon";
import { SignInForm } from "./SignIn";

import "./signIn.css";

export interface Props {
  isLoggedIn?: boolean;
  clickSubmit: (data: SignInForm) => void;
}

const SignInView = ({ isLoggedIn = true, clickSubmit }: Props) => {
  const navigate = useNavigate();

  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(
    isLoggedIn ? "normal" : "warning"
  );
  const [stateValues, setStateValues] = useState<SignInForm>({
    nickname: "",
    password: "",
  });

  const handleButtonEvent = () => {
    clickSubmit(stateValues);
  };

  useEffect(() => {
    setModeValue(isLoggedIn ? "normal" : "warning");
  }, [isLoggedIn]);

  return (
    <InputForm
      submitButtonText="로그인"
      disabledSubmitButton={true}
      onSubmit={handleButtonEvent}
    >
      <div className="signIn-wrap">
        <div className="logo-wrap">
          <div className="logo">
            <Icon classNames="logo-container" />
          </div>
        </div>
        <div className="input-comp-wrap">
          <div
            onFocus={() => setModeValue("focus")}
            onBlur={() => setModeValue("normal")}
          >
            <InputText
              type="text"
              inputId="signInNickNm"
              mode={modeValue}
              widthSize="medium"
              placeholder="닉네임"
              onChangeValue={(value: string) =>
                setStateValues({ ...stateValues, nickname: value })
              }
            />
            <InputText
              type="password"
              inputId="signInPw"
              mode={modeValue}
              widthSize="medium"
              placeholder="비밀번호"
              onChangeValue={(value: string) =>
                setStateValues({ ...stateValues, password: value })
              }
            />
          </div>
          <Button size="medium" onClick={() => navigate("/user/password")}>
            비밀번호 찾기
          </Button>
          |
          <Button size="medium" onClick={() => navigate("/user/signUp")}>
            회원가입
          </Button>
        </div>
      </div>
    </InputForm>
  );
};

export default SignInView;
