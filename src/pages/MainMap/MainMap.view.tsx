import IconButton from "../../components/common/IconButton";
import { useNavigate } from "react-router-dom";
import Dialog from "../../components/common/dialog";
import Map from "components/Map";
import styles from "./MainMap.module.scss";

export interface Props {
  days?: number;
}

const MainMapView = ({ days }: Props) => {
  const navigate = useNavigate();
  const isShow = days ? true : false;

  return (
    <>
      <Map />
      <div className={styles.buttonContainer}>
        <IconButton
          alt="바다로 가기"
          onClick={() => {
            navigate("/main/sea");
          }}
        />
      </div>
      <Dialog
        isShow={isShow}
        title={`${days}일 째 여행 중`}
        className={styles.dialog}
      />
    </>
  );
};

export default MainMapView;
