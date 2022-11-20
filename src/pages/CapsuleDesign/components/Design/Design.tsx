import React, { useState } from "react";
import DesignItem from "../DesignItem";
import DesignSettings from "../DesignSettings";
import {
  CirclePaper,
  CloudPaper,
  CrossPaper,
  FlowerPaper,
  GrassPaper,
  HeartPaper,
  NotePaper,
  StarPaper,
} from "assets/images/letterPaper";
import styles from "./Design.module.css";

const Design = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  // TODO: 추후 타입 처리
  const categoryLabelList: ("병" | "병색상" | "편지지")[] = [
    "병",
    "병색상",
    "편지지",
  ];

  const bottles: string[] = [];
  const bottlesColors: string[] = [];
  const letterPapers: string[] = [
    CirclePaper,
    CloudPaper,
    CrossPaper,
    FlowerPaper,
    GrassPaper,
    HeartPaper,
    NotePaper,
    StarPaper,
  ];
  const categoryItemList = [bottles, bottlesColors, letterPapers];
  // TODO: 추후 변수 처리
  const [selectedItem, setSelectedItem] = useState<
    Record<"병" | "병색상" | "편지지", number | null>
  >({
    병: null,
    병색상: null,
    편지지: null,
  });

  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        {categoryLabelList.map((item) => (
          <h3 key={item}>{item}</h3>
        ))}
      </div>
      <div className={styles.wrapper}>
        <DesignSettings
          setCurrent={setSelectedCategory}
          items={categoryLabelList}
          current={selectedCategory}
        />

        <DesignItem
          items={categoryItemList[selectedCategory]}
          category={selectedCategory}
          selectedItem={selectedItem[categoryLabelList[selectedCategory]]}
          selectTabIdx={(tab: number, idx: number) => {
            setSelectedItem({ ...selectedItem, [categoryLabelList[tab]]: idx });
          }}
        />
      </div>
    </div>
  );
};

export default Design;
