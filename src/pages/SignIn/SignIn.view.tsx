import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputText from "components/common/inputText";
import Button from "components/common/button";
import InputForm from "components/common/InputForm";

import "./signIn.css";
import Icon from "components/common/Icon"

export interface Props {
  isLoggedIn?: boolean;
  clickSubmit: (data: {email: string, password: string}) => void;
}

const SignInView = ({
  isLoggedIn = true,
  clickSubmit
}: Props) => {

  const navigate = useNavigate();
  
  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(!isLoggedIn ? "warning" : "normal")
  const [stateValues, setStateValues] = useState({
    email: "",
    password: "",
  });

  const handleButtonEvent = () => {
    clickSubmit(stateValues);
  }

  useEffect(() => {
    setModeValue(!isLoggedIn ? "warning" : "normal");
  }, [isLoggedIn])

  return (
    <InputForm submitButtonText={"로그인"} disabledSubmitButton={true} onSubmit={handleButtonEvent}>
      <div className='signIn-wrap'>
        <div className='logo-wrap'>
          <div className='logo'>
            <Icon classNames="logo-container"/>
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

export default SignInView;
