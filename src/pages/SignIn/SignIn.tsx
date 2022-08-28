import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputText } from "../../components/common/InputText";
import { Button } from "../../components/common/Button";

import { UrlPaths } from "../../routes";

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
    console.log("회원가입 테스트");
  }

  return (
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
      <div className='signIn-btn-wrap'>
        <Button size='bottom' label='로그인' onClick={clickSubmit} />
      </div>
    </div>
  );
};

export default SignIn;
