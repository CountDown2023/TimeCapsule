import SignInView from "./SignIn.view";

export type signInForm = {nickname: string, password: string};

const SignIn = () => {

  const clickSubmit = (data: signInForm) => {
    //TODO: 클릭 이벤트 적용하기
    console.log("로그인 테스트");
    console.log("email : ", data.nickname);
    console.log("password: ", data.password);
  }
  
  //TODO: isLoggedIn 값 변경 필요
  return <SignInView isLoggedIn ={true} clickSubmit={clickSubmit}/>
};

export default SignIn;
