import { useCapsuleState } from "../../../../hooks/capsuleStore";
import React, { useState } from "react";
import Dialog from "../../../../components/common/dialog";
import CapsuleInputView from "./CapsuleInput.view";
import { postCapsule } from "api/capsule";

const CapsuleInput = () => {
  const [isShowSuccessDialog, setIsShowSuccessDialog] =
    useState<boolean>(false);
  const { letterPaper, bottle, bottleColor } = useCapsuleState();

  return (
    <>
      <CapsuleInputView
        letterPaper={letterPaper}
        onSubmit={({ title, mySelf, content }) => {
          setIsShowSuccessDialog(true);

          postCapsule({
            name: title,
            bottle_choice: bottle,
            bottle_color: bottleColor,
            letter_paper: letterPaper,
            content: mySelf,
            goals: content,
          });
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
