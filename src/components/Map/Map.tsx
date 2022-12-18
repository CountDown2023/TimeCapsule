import moment from "moment";
import styles from "./Map.module.scss";
import Map01View from "./Map01";
import Map02View from "./Map02";
import Map03View from "./Map03";

const Map = () => {
  const time = parseInt(moment().format("HH"));

  return (
    <div className={styles.container}>
      {/*
       * 0시 ~ 8시: 1번 이미지
       * 8시 ~ 16시: 2번 이미지
       * 16시 ~ 24시: 3번 이미지
       */}
      {time >= 0 && time <= 8 ? (
        <Map01View />
      ) : time >= 8 && time >= 16 ? (
        <Map02View />
      ) : (
        <Map03View />
      )}
    </div>
  );
};

export default Map;
