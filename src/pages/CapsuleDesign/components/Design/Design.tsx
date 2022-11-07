import React, { useState } from "react";
import DesignItem from "../DesignItem";
import DesignNav from "../DesignNav";
import DesignSettings from "../DesignSettings";
import "./Design.css";
import light from "assets/images/palette/light.png";
import {
  CirclePaper,
  CloudPaper,
  CrossPaper,
  FlowerPaper,
  GrassPaper,
  HeartPaper,
  NotePaper,
  StarPaper,
} from "assets/images/letterPaper/index";

const Design = () => {
  const [tab, setTab] = useState<number>(0);

  const [bottles, setBottles] = useState<{ imgSrc: string }[]>([
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
  ]);

  const red = light;

  const [bottleColors, setBottleColors] = useState<{ imgSrc: string }[]>([
    { imgSrc: light },
    { imgSrc: light },
    { imgSrc: light },
    { imgSrc: light },
    { imgSrc: light },
    { imgSrc: light },
    { imgSrc: light },
    { imgSrc: light },
  ]);

  const [letterPapers, setLetterPapers] = useState<{ imgSrc: string }[]>([
    { imgSrc: CirclePaper },
    { imgSrc: CloudPaper },
    { imgSrc: CrossPaper },
    { imgSrc: FlowerPaper },
    { imgSrc: GrassPaper },
    { imgSrc: HeartPaper },
    { imgSrc: NotePaper },
    { imgSrc: StarPaper },
  ]);

  const [letterLines, setLetterLines] = useState<{ imgSrc: string }[]>([
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
  ]);

  const [saveTabIdx, setSaveTabIdx] = useState<{ tab: number; idx: number }[]>([
    { tab: 0, idx: -1 },
    { tab: 1, idx: -1 },
    { tab: 2, idx: -1 },
    { tab: 3, idx: -1 },
  ]);

  return (
    <div className="designWrapper">
      <div className="preview">
        {saveTabIdx.map((item, idx) => (
          <h3>
            {item.tab === 0
              ? "병"
              : item.tab === 1
              ? "병색상"
              : item.tab === 2
              ? "편지지"
              : "편지지줄"}
            {item.idx}
          </h3>
        ))}
      </div>
      <div className="settingWrapper">
        <DesignSettings
          setCurrent={setTab}
          items={["병", "병색상", "편지지", "편지지줄"]}
          current={tab}
        />

        <DesignItem
          items={
            tab === 0
              ? bottles
              : tab === 1
              ? bottleColors
              : tab === 2
              ? letterPapers
              : letterLines
          }
          tab={tab}
          selected={saveTabIdx[tab].idx}
          selectTabIdx={(tab: number, idx: number) => {
            setSaveTabIdx(
              saveTabIdx.map((item) => {
                if (tab === item.tab) {
                  return { ...item, idx: idx };
                } else {
                  return item;
                }
              })
            );
          }}
        />
      </div>
    </div>
  );
};

export default Design;
