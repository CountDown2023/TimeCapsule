import NewPasswordView from "./NewPassword.view";

const NewPassword = () => {
  const clickSubmit = (data: {newPwd: string, newPwdConfirm: string}) => {
    console.log("비밀번호 수정 테스트");
    console.log("newPwd : ", data.newPwd);
    console.log("newPwdConfirm : ", data.newPwdConfirm);

    //TODO: 비밀번호 확인 API 연동 로직 구현
  }

  return <NewPasswordView isFailed={false} onSubmit={clickSubmit}/>
};

export default NewPassword;
