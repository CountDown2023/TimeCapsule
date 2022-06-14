import React, { useState } from "react";
import Bottle from "../Bottle";
import BottleColor from "../BottleColor";
import DesignNav from "../DesignNav";
import DesignSettings from "../DesignSettings";
import LetterLine from "../LetterLine";
import LetterPaper from "../LetterPaper";
import "./Design.css";

const Design = () => {
  const [tab, setTab] = useState<number>(0);
  return (
    <div className="designWrapper">
      <div className="preview">미리보기</div>
      <div className="settingWrapper">
        <DesignSettings
          setCurrent={setTab}
          items={["병", "병색상", "편지지", "편지지줄"]}
          current={tab}
        />
        {tab === 0 && <Bottle />}
        {tab === 1 && <BottleColor />}
        {tab === 2 && <LetterPaper />}
        {tab === 3 && <LetterLine />}
      </div>
    </div>
  );
};

export default Design;
