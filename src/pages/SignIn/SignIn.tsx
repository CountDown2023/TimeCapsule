import { signIn } from "api/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInView from "./SignIn.view";

import { HTTP_STATUS } from "configs/axios";

export type SignInForm = {
  nickname: string, 
  password: string
};

export type SignInError = {
  message: string,
  code: string,
  status: number
}

const SignIn = () => {
  const navigate = useNavigate();  
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  const clickSubmit = (data: SignInForm) => {
    signIn(data)
    .then((res) => {
      navigate(`/main/sea`);
    })
    .catch((err:SignInError) => {
      setIsLoggedIn(false);
      if(err.status === (HTTP_STATUS.NOT_FOUND || HTTP_STATUS.UNAUTHORIZED)) alert("닉네임 또는 비밀번호가 일치하지 않습니다. 로그인 정보를 다시 확인해주세요.")
    })
  }

  return <SignInView isLoggedIn ={isLoggedIn} clickSubmit={clickSubmit}/>
};

export default SignIn;
