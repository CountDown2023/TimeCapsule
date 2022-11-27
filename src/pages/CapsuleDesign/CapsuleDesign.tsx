import React, { useState } from "react";
import CapsuleInput from "./components/CapsuleInput";
import Design from "./components/Design";
import DesignNav from "./components/DesignNav";
import styles from "./CapsuleDesign.module.scss";
import Dialog from "components/common/dialog";

const CapsuleDesign = () => {
  const [page, setPage] = useState<number>(0);
  const [isShowGoMainDialog, setIsShowGoMainDialog] = useState<boolean>(false);

  return (
    <>
      <button
        className={styles.backButton}
        onClick={() => setIsShowGoMainDialog(true)}
      >
        메인으로 가기
      </button>

      <div className={styles.container}>
        {page === 0 && <Design />}
        {page === 1 && <CapsuleInput />}
      </div>

      <DesignNav
        setCurrent={setPage}
        items={["design", "input"]}
        current={page}
      />

      <Dialog
        className={styles.dialog}
        isShow={isShowGoMainDialog}
        title={"중간에 화면을 나가시면 저장이 되지 않아요. 괜찮으신가요?"}
        okButton="네 괜찮습니다."
        cancleButton="여기 남아있을래요!"
        onClickCancleButton={() => setIsShowGoMainDialog(false)}
        onClickOkButton={() => {
          setIsShowGoMainDialog(false);
          // TODO: 페이지 전환 로직 추가
        }}
      />
    </>
  );
};

export default CapsuleDesign;
