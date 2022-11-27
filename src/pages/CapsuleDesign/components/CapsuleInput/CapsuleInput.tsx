import React, { useState } from "react";
import styles from "./CapsuleInput.module.scss";
import Dialog from "../../../../components/common/dialog";
import CapsuleInputView from "./CapsuleInput.view";

const CapsuleInput = () => {
  const [isShowSuccessDialog, setIsShowSuccessDialog] =
    useState<boolean>(false);
  
  return (
    <>
      <CapsuleInputView
        onSubmit={(form) => {
          setIsShowSuccessDialog(true);
          // TOOD: form API 작성
          console.log(form);
        }}
      />

      <Dialog
        className={styles.dialog}
        isShow={isShowSuccessDialog}
        title={"캡슐 생성이 완료되었습니다."}
        okButton="확인"
        onClickOkButton={() => setIsShowSuccessDialog(false)}
      />
    </>
  );
};

export default CapsuleInput;
