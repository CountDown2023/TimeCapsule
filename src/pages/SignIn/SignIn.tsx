import SignInView from "./SignIn.view";

const SignIn = () => {

  const clickSubmit = (data: {email: string, password: string}) => {
    //TODO: 클릭 이벤트 적용하기
    console.log("로그인 테스트");
    console.log("email : ", data.email);
    console.log("password: ", data.password);
  }
  
  //TODO: isLoggedIn 값 변경 필요
  return <SignInView isLoggedIn ={true} clickSubmit={clickSubmit}/>
};

export default SignIn;
