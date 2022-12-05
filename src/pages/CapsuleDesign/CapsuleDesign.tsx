import React, { useState } from "react";
import { CapsuleContext } from "../../store";
import CapsuleInput from "./components/CapsuleInput";
import Design from "./components/Design";
import DesignNav from "./components/DesignNav";
import Dialog from "components/common/dialog";
import styles from "./CapsuleDesign.module.scss";
import { useNavigate } from "react-router-dom";

const CapsuleDesign = () => {
  const navigation = useNavigate();
  const [page, setPage] = useState<number>(0);
  const [isShowGoMainDialog, setIsShowGoMainDialog] = useState<boolean>(false);

  return (
    <CapsuleContext>
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
        useDim
        isShow={isShowGoMainDialog}
        title="중간에 화면을 나가시면 저장이 되지 않아요. 괜찮으신가요?"
        okButton="네 괜찮습니다."
        cancleButton="여기 남아있을래요!"
        onClickCancleButton={() => setIsShowGoMainDialog(false)}
        onClickOkButton={() => {
          setIsShowGoMainDialog(false);
          navigation(-1);
        }}
      />
    </CapsuleContext>
  );
};

export default CapsuleDesign;
