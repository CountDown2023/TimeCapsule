import { useEffect, useRef, useState } from "react";
import {
  SkyDay,
  SeaDay,
  BubbleCenter,
  BubbleAll,
  CloudDayLeft,
  CloudDayRight,
} from "../../assets/images/sea";
import "./Sea.scss";

const SeaDayView = () => {
  const skyRef = useRef<HTMLImageElement>(null);
  const [top, setTop] = useState<number>(180);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    // TODO: top 값 수정 필요
    // useRef는 값이 변한다고 해서 리렌더링이 발생하지 않음
    // 그래서 top 초기값이 무조건 0 으로 설정 되고 있음...
    // 해결 방법 필요... 여러 테스트 진행했으나 문제 해결 안됨
    setTop(window.innerWidth * 0.341);
  };

  return (
    <div className="sea__container">
      <img
        className="sea__sea"
        src={SeaDay}
        alt=""
        style={{ top: `${top}px` }}
      />
      <img
        className="sea__bubble__center"
        src={BubbleCenter}
        alt=""
        style={{ top: `${top}px` }}
      />
      <img
        className="sea__bubble__all"
        src={BubbleAll}
        alt=""
        style={{ top: `${top}px` }}
      />
      <img ref={skyRef} className="sea__sky" src={SkyDay} alt="" />
      <img
        className="sea__cloud__left"
        src={CloudDayLeft}
        alt=""
        style={{ top: `${top}px` }}
      />
      <img
        className="sea__cloud__right"
        src={CloudDayRight}
        alt=""
        style={{ top: `${top}px` }}
      />
    </div>
  );
};

export default SeaDayView;
