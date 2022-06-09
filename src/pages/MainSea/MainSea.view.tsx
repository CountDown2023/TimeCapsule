export interface Props {
  unknownCapsule: string;
  hasCapsule: boolean;
  showDescription: boolean;
}

const MainSeaView = ({
  unknownCapsule,
  hasCapsule,
  showDescription,
}: Props) => {
  return (
    <>
      <button>설정</button>
      {hasCapsule ? (
        <button>지도로 가기</button>
      ) : (
        <button>캡술 만들러 가기</button>
      )}
      {showDescription && <div>바다 화면에서 캡슐을 다시 볼 수 있어요!</div>}
      <div>{unknownCapsule && "익명의 캡슐이 있네요. 보시겠습니까?"}</div>
    </>
  );
};

export default MainSeaView;
