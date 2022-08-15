import React, { useState } from "react";
import DesignItem from "../DesignItem";

import DesignNav from "../DesignNav";
import DesignSettings from "../DesignSettings";

import "./Design.css";

const Design = () => {
  const [tab, setTab] = useState<number>(0);

  const [bottles, setBottles] = useState<{ idx: number; imgSrc: string }[]>([
    { idx: 0, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 1, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 2, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 3, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 4, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 5, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 6, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 7, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
  ]);

  const [bottleColors, setBottleColors] = useState<
    { idx: number; imgSrc: string }[]
  >([
    { idx: 0, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 1, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 2, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 3, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 4, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 5, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 6, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 7, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
  ]);

  const [letterPapers, setLetterPapers] = useState<
    { idx: number; imgSrc: string }[]
  >([
    { idx: 0, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 1, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 2, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 3, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 4, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 5, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 6, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 7, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
  ]);

  const [letterLines, setLetterLines] = useState<
    { idx: number; imgSrc: string }[]
  >([
    { idx: 0, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 1, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 2, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 3, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 4, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 5, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 6, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
    { idx: 7, imgSrc: process.env.PUBLIC_URL + "/images/bottle/bottle1.png" },
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
