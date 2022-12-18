import IconButton from "../../components/common/IconButton";
import Sea from "../../components/Sea";
import { useState } from "react";
import Dialog from "../../components/common/dialog";
import Setting from "../../components/Setting";
import useDiscloser from "../../hooks/useDiscloser";
import styles from "./MainSea.module.scss";

export interface Props {
  unknownCapsule?: { title: string; contents: string[] };
  hasCapsule: boolean;
  showDescription: boolean;
  onClickMap: () => void;
  onClickCapsule: () => void;
}

const MainSeaView = ({
  unknownCapsule,
  hasCapsule,
  showDescription,
  onClickMap,
  onClickCapsule,
}: Props) => {
  const [isShowUnknownCapsule, setIsShowUnknownCapsule] = useState<boolean>(
    unknownCapsule ? true : false
  );
  const [isShowDescription, setIsShowDescription] =
    useState<boolean>(showDescription);
  const { isOpen: showSetting, setToggle: setToggleSetting } = useDiscloser();
  const { isOpen: showCapsule, setToggle: setToggleCapsules } = useDiscloser();

  return (
    <>
      <Sea />
      <div className={styles.buttonContainer}>
        <IconButton alt="설정" onClick={setToggleSetting} type="SETTING" />
        {hasCapsule ? (
          <IconButton alt="지도로 가기" onClick={onClickMap} type="MAP" />
        ) : (
          <IconButton
            alt="캡술 만들러 가기"
            onClick={onClickCapsule}
            type="PLUS"
          />
        )}
      </div>
      <Dialog
        isShow={isShowDescription}
        title={
          <>
            바다 화면에서 캡슐을
            <br />
            다시 볼 수 있어요!
          </>
        }
        okButton="확인"
        onClickOkButton={() => {
          setIsShowDescription(false);
        }}
      />
      <Dialog
        isShow={isShowUnknownCapsule}
        title={
          <>
            익명의 캡슐이 있네요.
            <br />
            보시겠습니까?
          </>
        }
        okButton="예, 볼래요!"
        cancleButton="아니요, 괜찮아요!"
        onClickOkButton={() => {
          setIsShowUnknownCapsule(false);
          setToggleCapsules();
        }}
        onClickCancleButton={() => {
          setIsShowUnknownCapsule(false);
        }}
      />
      <Setting isShow={showSetting} onClose={setToggleSetting} />
      <Dialog
        onClickCancleButton={setToggleCapsules}
        cancleButton="닫기"
        isShow={showCapsule}
        title={unknownCapsule?.title}
        description={unknownCapsule?.contents?.join(", ")}
      />
    </>
  );
};

export default MainSeaView;
