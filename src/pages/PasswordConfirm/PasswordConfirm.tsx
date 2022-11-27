import PasswordConfirmView from './PasswordConfirm.view'

export type pwdConfirmForm = {currentPwd: string};

const PasswordConfirm = () => {
  const clickSubmit = (data: pwdConfirmForm) => {
    console.log("현재 비밀번호 확인 테스트");
    console.log("currentPwd : ", data.currentPwd);

    //TODO: 비밀번호 확인 API 연동 로직 구현

  }

  return <PasswordConfirmView isFailed={false} clickSubmit={clickSubmit}/>
};

export default PasswordConfirm;
