import moment from "moment";
import { useEffect, useState } from "react";
import SeaDayView from "./SeaDay";
import SeaNightView from "./SeaNight";
import styles from "./Sea.module.scss";

const Sea = () => {
  const [mode, setMode] = useState<"DAY" | "NIGHT">("DAY");

  useEffect(() => {
    const time = parseInt(moment().format("HH"));

    // 오후 6시부터 새벽 6시까지는 밤 이미지로 노출
    if (time <= 6 || time >= 18) {
      setMode("NIGHT");
    }
  }, []);

  return (
    <div className={styles.fixed}>
      {mode === "DAY" ? <SeaDayView /> : <SeaNightView />}
    </div>
  );
};

export default Sea;
