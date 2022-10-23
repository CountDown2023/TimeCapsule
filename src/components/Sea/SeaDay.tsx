import {
  SkyDay,
  SunMoon,
  WaterDay,
  BubbleCenter,
  BubbleFront,
} from "../../assets/images/sea";
import "./Sea.scss";

const SeaDay = () => {
  return (
    <div className="sea-day__container">
      {/* TODO: 수정하기 */}
      <img className="sea-day__sky" src={SkyDay} alt="" />
      <img className="sea-day__sea" src={WaterDay} alt="" />
      <img className="sea-day__bubble__center" src={BubbleCenter} alt="" />
    </div>
  );
};

export default SeaDay;
