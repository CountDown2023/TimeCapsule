import IconButton from "../../components/common/IconButton";
import { useNavigate } from "react-router-dom";
import Dialog from "../../components/common/dialog";
import Map from "components/Map";
import styles from "./MainMap.module.scss";
import { SpinnerTop } from "static/logo";

export interface Props {
  days?: number;
}

const MainMapView = ({ days }: Props) => {
  const navigate = useNavigate();
  const isShow = days ? true : false;

  return (
    <>
      {/* TODO: 병이미지 재 확인 필요 */}
      <img src={SpinnerTop} alt="" className={styles.bottle} />
      <Map />
      <div className={styles.buttonContainer}>
        <IconButton
          alt="바다로 가기"
          onClick={() => {
            navigate("/main/sea");
          }}
          type="SEA"
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
