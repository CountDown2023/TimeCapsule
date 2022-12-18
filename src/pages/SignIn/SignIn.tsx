import { signIn } from "api/user";
import { useNavigate } from "react-router-dom";
import SignInView from "./SignIn.view";

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

  const clickSubmit = (data: SignInForm) => {
    //TODO: 클릭 이벤트 적용하기
    // console.log("로그인 테스트");
    // console.log("email : ", data.nickname);
    // console.log("password: ", data.password);

    signIn(data)
    .then((res) => {
      navigate(`/main/sea`);
    })
    .catch((err:SignInError) => {
      //TODO: error 처리 로직 구현
      // console.log("err : ", err);
      return <>에러가 발생했습니다. 다시 시도해주세요.</>
    })
  }

  //TODO: isLoggedIn 값 변경 필요
  return <SignInView isLoggedIn ={true} clickSubmit={clickSubmit}/>
};

export default SignIn;
