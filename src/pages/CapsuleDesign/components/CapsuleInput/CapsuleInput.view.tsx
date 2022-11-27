import React from "react";
import styles from "./CapsuleInput.module.scss";

const CapsuleInputView = () => {
  return (
    <>
      <div className={styles.form}>
        <input
          className={styles.name}
          type="text"
          placeholder="캡슐 이름을 입력하세요."
        />

        <div className={styles.content}>
          <div className={styles.description}>이루고싶은 목표를 적어보세요</div>
          <textarea />
          <textarea />
          <textarea />
          <textarea />
          <textarea />
          <textarea />
        </div>

        <textarea
          className={styles.mySelf}
          placeholder="12월 31일의 나에게 한마디"
        />
      </div>
    </>
  );
};

export default CapsuleInputView;
