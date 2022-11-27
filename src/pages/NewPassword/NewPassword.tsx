import NewPasswordView from "./NewPassword.view";

export type NewPwdForm = {newPwd: string, newPwdConfirm: string};

const NewPassword = () => {
  const clickSubmit = (data: NewPwdForm) => {
    console.log("비밀번호 수정 테스트");
    console.log("newPwd : ", data.newPwd);
    console.log("newPwdConfirm : ", data.newPwdConfirm);

    //TODO: 비밀번호 확인 API 연동 로직 구현
  }

  return <NewPasswordView isFailed={false} onSubmit={clickSubmit}/>
};

export default NewPassword;
