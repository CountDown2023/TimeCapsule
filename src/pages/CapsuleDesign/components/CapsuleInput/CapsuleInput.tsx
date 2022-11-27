import React, { useState } from "react";
import styles from "./CapsuleInput.module.scss";
import Dialog from "../../../../components/common/dialog";
import CapsuleInputView from "./CapsuleInput.view";

const CapsuleInput = () => {
  const [isShowSuccessDialog, setIsShowSuccessDialog] =
    useState<boolean>(false);
  return (
    <>
      <button
        className={styles.submitButton}
        onClick={() => {
          setIsShowSuccessDialog(true);
          // TODO: 작성 API 붙이기
        }}
      >
        작성완료
      </button>

      <CapsuleInputView />

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
