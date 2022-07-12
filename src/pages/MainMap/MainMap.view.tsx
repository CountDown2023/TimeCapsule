import { useNavigate } from "react-router-dom";
import Dialog from "../../components/common/dialog";

export interface Props {
  days?: string;
}

const MainMapView = ({ days }: Props) => {
  const navigate = useNavigate();
  const isShow = days ? true : false;

  return (
    <>
      <button
        onClick={() => {
          navigate("/main/sea");
        }}
      >
        바다로 가기
      </button>
      <Dialog isShow={isShow} title={`${days}일 째 여행 중`} />
    </>
  );
};

export default MainMapView;
