import { useCapsuleState } from "hooks/capsuleStore";
import React, { useState } from "react";
import Dialog from "../../../../components/common/dialog";
import CapsuleInputView from "./CapsuleInput.view";

const CapsuleInput = () => {
  const [isShowSuccessDialog, setIsShowSuccessDialog] =
    useState<boolean>(false);
  const { letterPaper } = useCapsuleState();

  return (
    <>
      <CapsuleInputView
        letterPaper={letterPaper}
        onSubmit={(form) => {
          setIsShowSuccessDialog(true);
          // TOOD: form API 작성
          console.log(form);
        }}
      />

      <Dialog
        useDim
        isShow={isShowSuccessDialog}
        title="캡슐 생성이 완료되었습니다."
        okButton="확인"
        onClickOkButton={() => setIsShowSuccessDialog(false)}
      />
    </>
  );
};

export default CapsuleInput;
