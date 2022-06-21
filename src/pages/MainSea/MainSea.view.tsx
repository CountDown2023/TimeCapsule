import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <>
      <button>설정</button>
      {hasCapsule ? (
        <button
          onClick={() => {
            navigate("/main/map");
          }}
        >
          지도로 가기
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/capsule/design");
          }}
        >
          캡술 만들러 가기
        </button>
      )}
      {showDescription && <div>바다 화면에서 캡슐을 다시 볼 수 있어요!</div>}
      <div>{unknownCapsule && "익명의 캡슐이 있네요. 보시겠습니까?"}</div>
    </>
  );
};

export default MainSeaView;
