import { SignUpBody } from 'api/user';
import { useState } from 'react';
import useSignUp from './hook/useSignUp';

import SignUpView from './SignUp.view';

export type SignUpForm = {nickname: string, password: string, passwordConfirm: string};

const SignUp = () => {

  const [ reqSignUpData, setReqSignUpData ] = useState<SignUpBody>({
    nickname: "",
    password: ""
  });

  const { isLoading, isError, isJoined, mutate } = useSignUp(reqSignUpData);

  const clickSubmit = (data: SignUpForm) => {
    console.log("회원가입 테스트");
    console.log("email : ", data.nickname);
    console.log("pwd : ", data.password);
    console.log("pwd confirm : ", data.passwordConfirm);

    //TODO: 비밀번호/비밀번호 확인 validation 체크 로직 구현
    const requestData:SignUpBody = {
      nickname: data.nickname,
      password: data.password
    };

    setReqSignUpData(requestData);
    mutate();
  }

  if(isLoading) {
    return <>Loading....</>
  }

  if(isError) {
    return <>에러가 발생했습니다. 다시 시도해주세요.</>
  }

  //TODO: isJoined 값 변경 필요
  return <SignUpView isJoined={isJoined} clickSubmit={clickSubmit}/>;
};

export default SignUp;
