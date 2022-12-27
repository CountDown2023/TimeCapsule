import { signUp, SignUpBody } from "api/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignUpView from "./SignUp.view";

export type SignUpForm = {
  nickname: string;
  password: string;
  passwordConfirm: string;
};

const SignUp = () => {
  const navigation = useNavigate();
  const [isError, setError] = useState<boolean>(false);

  const clickSubmit = (data: SignUpForm) => {
    console.log("회원가입 테스트", data);

    const requestData: SignUpBody = {
      nickname: data.nickname,
      password: data.password,
    };

    signUp(requestData)
      .then(() => {
        navigation("/user/signIn");
      })
      .catch(() => {
        setError(true);
      });
  };

  return <SignUpView isError={isError} clickSubmit={clickSubmit} />;
};

export default SignUp;
