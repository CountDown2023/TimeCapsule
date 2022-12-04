import IconButton from "components/common/IconButton";
import { useNavigate } from "react-router-dom";
import Dialog from "../../components/common/dialog";
import "./MainMap.scss";

export interface Props {
  days?: number;
}

const MainMapView = ({ days }: Props) => {
  const navigate = useNavigate();
  const isShow = days ? true : false;

  return (
    <>
      <div className="main-map__button-container">
        <IconButton
          alt="바다로 가기"
          onClick={() => {
            navigate("/main/sea");
          }}
        />
      </div>
      <Dialog isShow={isShow} title={`${days}일 째 여행 중`} />
    </>
  );
};

export default MainMapView;
