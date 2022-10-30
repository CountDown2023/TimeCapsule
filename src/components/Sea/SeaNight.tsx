import { useEffect, useRef, useState } from "react";
import {
  SkyNight,
  SeaNight,
  BubbleCenter,
  BubbleAll,
  CloudNightLeft,
  CloudNightRight,
} from "../../assets/images/sea";
import "./Sea.scss";

const SeaNightView = () => {
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
    setTop(skyRef.current?.height ?? 180);
  };

  return (
    <div className="sea__container">
      <img
        className="sea__sea"
        src={SeaNight}
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
      <img ref={skyRef} className="sea__sky" src={SkyNight} alt="" />
      <img
        className="sea__cloud__left"
        src={CloudNightLeft}
        alt=""
        style={{ top: `${top}px` }}
      />
      <img
        className="sea__cloud__right"
        src={CloudNightRight}
        alt=""
        style={{ top: `${top}px` }}
      />
    </div>
  );
};

export default SeaNightView;
