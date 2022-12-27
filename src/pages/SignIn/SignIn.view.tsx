import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputText from "../../components/common/inputText";
import Button from "../../components/common/button";
import InputForm from "../../components/common/InputForm";
import Icon from "components/common/Icon";
import { SignInForm } from "./SignIn";
import { InputState } from "./type/SignInType"

import "./signIn.css";

export interface Props {
  isError: boolean;
  clickSubmit: (data: SignInForm) => void;
}

const SignInView = ({ isError, clickSubmit }: Props) => {
  const navigate = useNavigate();

  const [stateValues, setStateValues] = useState<SignInForm>({
    nickname: "",
    password: "",
  });
  const [nicknameState, setNicknameState] = useState<InputState>({
    state: isError ? "warning" : "normal",
    validation: isError,
    warningMsg: "",
  });
  const [passwordState, setPasswordState] = useState<InputState>({
    state: isError ? "warning" : "normal",
    validation: isError,
    warningMsg: "",
  });
  const [isDisableBtn, setIsDisableBtn] = useState<boolean>(true);

  useEffect(() => {
    setIsDisableBtn(
      nicknameState.validation && passwordState.validation ? false : true
    );
  }, [nicknameState, passwordState]);

  useEffect(() => {
    if (isError) {
      setNicknameState({
        ...nicknameState,
        state: "warning",
        validation: false,
      });
      setPasswordState({
        ...passwordState,
        state: "warning",
        validation: false,
      });
    }
  }, [isError]);

  const nicknameValid = (data: string) => {
    // 최소 2 ~ 최대 10자 이하
    const regex = /^.{2,10}$/;
    return regex.test(data);
  };
  const passwordValid = (data: string) => {
    // 영문, 숫자, 특수기호 포함 8~30자 이하
    const regex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])[A-Za-z\d\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,30}$/;
    return regex.test(data);
  };
  const handleButtonEvent = () => {
    clickSubmit(stateValues);
  };

  return (
    <InputForm
      submitButtonText="로그인"
      disabledSubmitButton={false}
      onSubmit={handleButtonEvent}
    >
      <div className="signIn-wrap">
        <div className="logo-wrap">
          <div className="logo">
            <Icon classNames="logo-container" />
          </div>
        </div>
        <div className="input-comp-wrap">
          <InputText
            type="text"
            inputId="signInNickNm"
            mode={nicknameState.state}
            widthSize="medium"
            placeholder="닉네임"
            warningMsg={
              nicknameState.state === "warning" &&
              (nicknameState.warningMsg !== "" || !nicknameState.validation)
                ? nicknameState.warningMsg
                : ""
            }
            onFocus={() =>
              setNicknameState({ ...nicknameState, state: "focus" })
            }
            onBlur={() =>
              setNicknameState({ ...nicknameState, state: "normal" })
            }
            onChangeValue={(value: string) => {
              //TODO: 닉네임 중복체크 로직 구현
              var valid = nicknameValid(value);
              var mode: "normal" | "focus" | "warning" = "normal";
              var warningMsg = "";
              console.log("nickname validation : ", nicknameValid(value));
              if (!valid) {
                mode = "warning";
                warningMsg =
                  "닉네임은 최소 2자 ~ 최대 10자 이내로 작성해주세요.";
              } else {
                mode = "focus";
              }
              setNicknameState({
                state: mode,
                validation: valid,
                warningMsg: warningMsg,
              });
              setStateValues({ ...stateValues, nickname: value });
            }}
          />
          <InputText
            type="password"
            inputId="signInPw"
            mode={passwordState.state}
            widthSize="medium"
            placeholder="비밀번호"
            warningMsg={
              passwordState.state === "warning" &&
              (passwordState.warningMsg !== "" || !passwordState.validation)
                ? passwordState.warningMsg
                : ""
            }
            onFocus={() =>
              setPasswordState({ ...passwordState, state: "focus" })
            }
            onBlur={() =>
              setPasswordState({ ...passwordState, state: "normal" })
            }
            onChangeValue={(value: string) => {
              var valid = passwordValid(value);
              var warningMsg = "";
              var mode: "normal" | "focus" | "warning" = "normal";
              console.log("password validation : ", passwordValid(value));
              if (!valid) {
                mode = "warning";
                warningMsg =
                  "비밀번호는 영문/숫자/특수기호를 포함하여 최소 8자 ~ 30자 이내로 작성해주세요.";
              } else {
                mode = "focus";
              }
              setPasswordState({
                state: mode,
                validation: valid,
                warningMsg: warningMsg,
              });
              setStateValues({ ...stateValues, password: value });
            }}
          />
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
