import "./Sea.scss";
import SeaDayView from "./SeaDay";

const Sea = () => {
  // TODO: 시간대에 따라 낮, 밤 보여지게 하기
  return (
    <div className="sea__fixed">
      <SeaDayView />
    </div>
  );
};

export default Sea;
