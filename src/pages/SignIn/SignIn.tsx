import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputText } from "components/common/inputText/InputText";
import { Button } from "components/common/button/Button";
import { InputForm } from "pages/common/InputForm/InputForm";

import { UrlPaths } from "routes";

import "./signIn.css";

export interface Props {
  isLoggedIn?: boolean;
}

const SignIn = ({
  isLoggedIn = true
}: Props) => {

  const navigate = useNavigate();
  
  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(!isLoggedIn ? "warning" : "normal")
  const [stateValues, setStateValues] = useState({
    email: "",
    password: "",
  });

  const clickSubmit = () => {
    //TODO: 클릭 이벤트 적용하기
    console.log("로그인 테스트");
  }

  return (
    <InputForm submitButtonText={"로그인"} disabledSubmitButton={true} onSubmit={clickSubmit}>
      <div className='signIn-wrap'>
        <div className='logo-wrap'>
          <div className='logo'>
            <p className='logo-txt'>logo</p>
          </div>
        </div>
        <div className='input-comp-wrap'>
          <div onFocus={() => setModeValue('focus')} onBlur={() => setModeValue('normal')}>
            <InputText
              type='text'
              inputId="signInNickNm"
              mode={modeValue}
              widthSize="medium"
              placeholder='닉네임'
              onChangeValue={(value: string) =>
                setStateValues({ ...stateValues, email: value})
              }
            />
            <InputText
              type='password'
              inputId="signInPw"
              mode={modeValue}
              widthSize="medium"
              placeholder='비밀번호'
              onChangeValue={(value: string) =>
                setStateValues({ ...stateValues, password: value })
              }
            />
          </div>
          <Button
            size='medium'
            label='비밀번호 찾기'
            onClick={() => navigate("/user/password")}
          />
          |
          <Button
            size='medium'
            label='회원가입'
            onClick={() => navigate("/user/signUp")}
          />
        </div>
      </div>
    </InputForm>
  );
};

export default SignIn;
