import React, { useState } from "react";
import DesignItem from "../DesignItem";

import DesignNav from "../DesignNav";
import DesignSettings from "../DesignSettings";

import "./Design.css";

const Design = () => {
  const [tab, setTab] = useState<number>(0);

  const [bottles, setBottles] = useState<{ idx: number; imgSrc: string }[]>([
    { idx: 0, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 1, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 2, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 3, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 4, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 5, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 6, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 7, imgSrc: "/images/bottle/bottle1.png" },
  ]);

  const [bottleColors, setBottleColors] = useState<
    { idx: number; imgSrc: string }[]
  >([
    { idx: 0, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 1, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 2, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 3, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 4, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 5, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 6, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 7, imgSrc: "/images/bottle/bottle1.png" },
  ]);

  const [letterPapers, setLetterPapers] = useState<
    { idx: number; imgSrc: string }[]
  >([
    { idx: 0, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 1, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 2, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 3, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 4, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 5, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 6, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 7, imgSrc: "/images/bottle/bottle1.png" },
  ]);

  const [letterLines, setLetterLines] = useState<
    { idx: number; imgSrc: string }[]
  >([
    { idx: 0, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 1, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 2, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 3, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 4, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 5, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 6, imgSrc: "/images/bottle/bottle1.png" },
    { idx: 7, imgSrc: "/images/bottle/bottle1.png" },
  ]);

  const [saveTabIdx, setSaveTabIdx] = useState<{ tab: number; idx: number }[]>([
    { tab: 0, idx: -1 },
    { tab: 1, idx: -1 },
    { tab: 2, idx: -1 },
    { tab: 3, idx: -1 },
  ]);
  // 객체로 해보기

  return (
    <div className="designWrapper">
      <div className="preview">미리보기</div>
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
