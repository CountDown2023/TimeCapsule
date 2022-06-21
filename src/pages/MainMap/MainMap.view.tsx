import { useNavigate } from "react-router-dom";

export interface Props {
  days: string;
}

const MainMapView = ({ days }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/main/sea");
        }}
      >
        바다로 가기
      </button>
      <div>{days}일 째 여행 중</div>
    </>
  );
};

export default MainMapView;
