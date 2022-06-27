import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputText } from "../../components/common/InputText";
import { Button } from "../../components/common/Button";

import { UrlPaths } from "../../routes/index";

import "./signIn.css";

const SignIn = () => {

  const navigate = useNavigate();
  
  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">("normal")
  const [stateValues, setStateValues] = useState({
    email: "",
    password: "",
  });

  const test = () => {
    console.log(stateValues);
  };

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
            mode={modeValue as "normal" | "warning" | "focus"}
            widthSize="medium"
            placeholder='닉네임'
            onChangeValue={(value: string) =>
              setStateValues({ ...stateValues, email: value})
            }
          />
          <InputText
            type='password'
            inputId="signInPw"
            mode={modeValue as "normal" | "warning" | "focus"}
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
          onClick={() => navigate(UrlPaths.user.signIn)}
        />
        |
        <Button
          size='medium'
          label='회원가입'
          onClick={() => navigate(UrlPaths.user.signUp)}
        />
      </div>
      <div className='signIn-btn-wrap'>
        <Button size='bottom' label='로그인' onClick={test} />
      </div>
    </div>
  );
};

export default SignIn;
