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

export type SignInValidation = {
  nicknameValidation: boolean;
  passwordValidation: boolean;
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
  const [warningMsg, setWarningMsg] = useState<string>("");
  const [inputValidation, setInputValidation] = useState<SignInValidation>({
    nicknameValidation: false,
    passwordValidation: false
  });
  const [buttonStatus, setButtonStatus] = useState<boolean>(true);

  useEffect(() => {
    setModeValue(isLoggedIn ? "normal" : "warning");
  }, [isLoggedIn]);

  useEffect(() => {
    setButtonStatus((inputValidation.nicknameValidation && inputValidation.passwordValidation)? false:true)
    console.log(buttonStatus);
  }, [inputValidation]);

  const nicknameValid = (data:string) => {
    // 최소 2 ~ 최대 10자 이하
    const regex = /^.{2,10}$/;
    return regex.test(data);
  }
  const passwordValid = (data:string) => {
    // 영문, 숫자, 특수기호 포함 8~30자 이하
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
    return regex.test(data);
  }
  const handleButtonEvent = () => {
    clickSubmit(stateValues);
  };

  return (
    <InputForm
      submitButtonText="로그인"
      disabledSubmitButton={buttonStatus}
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
              warningMsg={modeValue === "warning" && (warningMsg !== "" || !inputValidation.nicknameValidation)? warningMsg : ""}
              onChangeValue={(value: string) => {
                //TODO: 닉네임 중복체크 로직 구현
                setInputValidation({...inputValidation, nicknameValidation: nicknameValid(value)});
                if(!nicknameValid(value)) {
                  setModeValue("warning");
                  setWarningMsg("닉네임은 최소 2자 ~ 최대 10자 이내로 작성해주세요.");
                }else {
                  setModeValue("focus");
                  setWarningMsg("");
                }
                setStateValues({ ...stateValues, nickname: value })
              }
              }
            />
            <InputText
              type="password"
              inputId="signInPw"
              mode={modeValue}
              widthSize="medium"
              placeholder="비밀번호"
              warningMsg={modeValue === "warning" && ((warningMsg !== "" || !inputValidation.passwordValidation))? warningMsg : ""}
              onChangeValue={(value: string) =>{
                setInputValidation({...inputValidation, passwordValidation: passwordValid(value)});
                if(!passwordValid(value)) {
                  setModeValue("warning");
                  setWarningMsg("비밀번호는 영문/숫자/특수기호를 포함하여 최소 8자 ~ 30자 이내로 작성해주세요.");
                }else {
                  setModeValue("focus");
                  setWarningMsg("");
                }
                setStateValues({ ...stateValues, password: value })
              }
                
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
