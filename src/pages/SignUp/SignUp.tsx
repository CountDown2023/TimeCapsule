import { useNavigate } from 'react-router-dom';

import SignUpView from './SignUp.view';

const SignUp = () => {

  const clickSubmit = (data: {email: string, password: string, passwordConfirm: string}) => {
    console.log("회원가입 테스트");
    console.log("email : ", data.email);
    console.log("pwd : ", data.password);
    console.log("pwd confirm : ", data.passwordConfirm);

    //TODO: 회원가입 API 연동 로직 구현
  }

  //TODO: isJoined 값 변경 필요
  return <SignUpView isJoined={true} clickSubmit={clickSubmit}/>;
};

export default SignUp;
