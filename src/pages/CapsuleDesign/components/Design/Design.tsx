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
import { Light } from "assets/images/palette";
import classnames from "classnames";
import styles from "./Design.module.scss";

type Category = "병" | "병색상" | "편지지";

const Design = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const categoryLabelList: Category[] = ["병", "병색상", "편지지"];

  // TODO: 병 이미지 추가
  const bottles: string[] = [];
  const bottlesColors: string[] = [
    "#8B0000",
    "#FF8C00",
    "#FFFF00",
    "#008000",
    "#1E90FF",
    "#000080",
    "#4B0082",
    "#FF69B4",
  ];
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
  const [selectedItem, setSelectedItem] = useState<
    Record<Category, number | null>
  >({
    병: null,
    병색상: null,
    편지지: null,
  });

  const BottleItem = () => (
    <DesignItem
      items={bottles}
      selectedItem={selectedItem["병"]}
      selectTabIdx={(idx: number) => {
        setSelectedItem({
          ...selectedItem,
          병: idx,
        });
      }}
    />
  );

  const ColorItem = () => (
    <div className={styles.itemWrapper}>
      {bottlesColors.map((color, idx) => (
        <div
          onClick={() =>
            setSelectedItem({
              ...selectedItem,
              병색상: idx,
            })
          }
          className={classnames(styles.colorItem, [
            selectedItem["병색상"] && styles.active,
          ])}
        >
          <div className={styles.circle} style={{ backgroundColor: color }} />
          <img src={Light} alt="" />
        </div>
      ))}
    </div>
  );

  const PaperItem = () => (
    <DesignItem
      items={letterPapers}
      selectedItem={selectedItem["편지지"]}
      selectTabIdx={(idx: number) => {
        setSelectedItem({
          ...selectedItem,
          편지지: idx,
        });
      }}
    />
  );

  const ChoiceComponentList = [BottleItem(), ColorItem(), PaperItem()];

  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        {categoryLabelList.map((item) => (
          <h3 key={item}>{item}</h3>
        ))}
      </div>

      <DesignSettings
        setCurrent={setSelectedCategory}
        items={categoryLabelList}
        current={selectedCategory}
      />
      <div className={styles.wrapper}>
        {ChoiceComponentList[selectedCategory]}
      </div>
    </div>
  );
};

export default Design;
