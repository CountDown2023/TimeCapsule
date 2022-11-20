import { Button } from "components/common/button/Button";
import useDiscloser from "hooks/useDiscloser";
import { useState } from "react";
import styles from "./Information.module.scss";

export interface Props {
  onSubmitVoc: (content: string) => void;
}

const InformationView = ({ onSubmitVoc }: Props) => {
  const { isOpen, setOpen, setClose } = useDiscloser();
  const [content, setContent] = useState<string>("");

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div>버전 정보</div>
        <div>v. 1.1.0</div>
      </div>
      <hr />
      <div className={styles.item}>
        <div>연락처</div>
        <div>timeCapsule</div>
      </div>
      <hr />
      <div className={styles.item}>
        <div>제안하기</div>
        <div onClick={() => (isOpen ? setClose() : setOpen())}>열기</div>
      </div>
      {isOpen && (
        <>
          <textarea
            className={styles.voc}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          {/* TODO: 버튼 컴포넌트 수정 후 재 사용 */}
          <Button
            size="bottom"
            label="제출하기"
            onClick={() => {
              onSubmitVoc(content);
              setClose();
            }}
          />
        </>
      )}
    </div>
  );
};

export default InformationView;
