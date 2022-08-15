import { useState } from "react";
import Dialog from "../../components/common/dialog";
import Setting from "../../components/Setting";
import useDiscloser from "../../hooks/useDiscloser";
import "./MainSea.scss";

export interface Props {
  unknownCapsule?: string;
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
  const { isOpen, setToggle } = useDiscloser();

  return (
    <div className="main-sea">
      <button onClick={setToggle}>설정</button>
      {hasCapsule ? (
        <button onClick={onClickMap}>지도로 가기</button>
      ) : (
        <button onClick={onClickCapsule}>캡술 만들러 가기</button>
      )}
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
        }}
        onClickCancleButton={() => {
          setIsShowUnknownCapsule(false);
        }}
      />
      <Setting isShow={isOpen} onClose={setToggle} />
    </div>
  );
};

export default MainSeaView;
