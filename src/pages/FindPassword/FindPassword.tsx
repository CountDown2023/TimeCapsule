import FindPasswordView from "./FindPassword.view";

export type FindPwdForm = {nickname: string, email: string};

const FindPassword = () => {

  const clickSubmit = (data: FindPwdForm) => {
    console.log("비밀번호 찾기 테스트");
    console.log("nickname : ", data.nickname);
    console.log("email : ", data.email);

    //TODO: 비밀번호 확인 API 연동 로직 구현

  }

  return <FindPasswordView isFailed={false} onSubmit={clickSubmit} />
};

export default FindPassword;
