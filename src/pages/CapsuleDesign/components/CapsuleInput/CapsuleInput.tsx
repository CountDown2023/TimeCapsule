import React, { useState } from "react";
import "./CapsuleInput.css";
import Dialog from "../../../../components/common/dialog";

const CapsuleInput = () => {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);
  const [saveComplete, setIsSaveComplete] = useState<boolean>(false);
  return (
    <div className="inputWrapper">
      <button className="capsuleInputBtn" onClick={() => setIsShowDialog(true)}>
        작성완료
      </button>
      <Dialog
        className="saveDialog"
        isShow={isShowDialog}
        title={<>캡슐 생성이 완료되었습니다.</>}
        okButton="확인"
        onClickOkButton={() => setIsShowDialog(false)}
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
