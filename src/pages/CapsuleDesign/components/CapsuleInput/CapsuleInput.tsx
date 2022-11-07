import React, { useState } from "react";
import "./CapsuleInput.css";
import Dialog from "../../../../components/common/dialog";

const CapsuleInput = () => {
  const [isShowSuccessDialog, setIsShowSuccessDialog] =
    useState<boolean>(false);
  const [isShowGoMainDialog, setIsShowGoMainDialog] = useState<boolean>(false);
  const [saveComplete, setIsSaveComplete] = useState<boolean>(false);
  return (
    <div className="inputWrapper">
      <button
        className="capsuleInputBtn"
        onClick={() => {
          setIsShowSuccessDialog(true);
          setIsSaveComplete(true);
        }}
      >
        작성완료
      </button>

      <button className="goMainBtn" onClick={() => setIsShowGoMainDialog(true)}>
        메인으로 가기
      </button>

      <Dialog
        className="saveDialog"
        isShow={isShowSuccessDialog}
        title={"캡슐 생성이 완료되었습니다."}
        okButton="확인"
        onClickOkButton={() => setIsShowSuccessDialog(false)}
      />
      <Dialog
        className="goMainDialog"
        isShow={isShowGoMainDialog}
        title={"중간에 화면을 나가시면 저장이 되지 않아요. 괜찮으신가요?"}
        okButton="네 괜찮습니다."
        cancleButton="여기 남아있을래요!"
        onClickCancleButton={() => setIsShowGoMainDialog(false)}
        onClickOkButton={() => setIsShowGoMainDialog(true)}
      />
      <div className="inputWrapper2">
        <input
          className="capsuleName"
          type="text"
          placeholder="캡슐 이름을 입력하세요."
        />
        <ul className="capsuleInput">
          <div className="capsuleDescription">이루고싶은 목표를 적어보세요</div>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
        </ul>

        <textarea className="toMe" placeholder="12월 31일의 나에게 한마디" />
      </div>
    </div>
  );
};

export default CapsuleInput;
