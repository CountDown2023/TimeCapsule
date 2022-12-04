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
import { Bottle01Src, Bottle01 } from "assets/images/bottle";
import { Light } from "assets/images/palette";
import classnames from "classnames";
import styles from "./Design.module.scss";

type Category = "병" | "병색상" | "편지지";

const Design = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const categoryLabelList: Category[] = ["병", "병색상", "편지지"];

  // TODO: 병 이미지 수정
  const bottles: string[] = [
    Bottle01Src,
    Bottle01Src,
    Bottle01Src,
    Bottle01Src,
    Bottle01Src,
    Bottle01Src,
    Bottle01Src,
    Bottle01Src,
  ];
  const bottlesColors: string[] = [
    "#F24C4C",
    "#EC9B3B",
    "#F9D923",
    "#6BCB77",
    "#4D96FF",
    "#293462",
    "#52006A",
    "#FF577F",
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
  const [selectedItem, setSelectedItem] = useState<Record<Category, number>>({
    병: 0,
    병색상: 0,
    편지지: 0,
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
          key={color}
          onClick={() =>
            setSelectedItem({
              ...selectedItem,
              병색상: idx,
            })
          }
          className={classnames(styles.colorItem, [
            selectedItem["병색상"] === idx && styles.active,
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
  const PreviewBottleList = [
    <Bottle01 fill={bottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={bottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={bottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={bottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={bottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={bottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={bottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={bottlesColors[selectedItem["병색상"]]} />,
  ];

  return (
    <>
      <div className={styles.preview}>
        <img
          className={styles.previewPaper}
          src={letterPapers[selectedItem["편지지"]]}
          alt=""
        />
        <div className={styles.preiewBottle}>
          {PreviewBottleList[selectedItem["병"] as number]}
        </div>
      </div>
      <DesignSettings
        setCurrent={setSelectedCategory}
        items={categoryLabelList}
        current={selectedCategory}
      />
      <div className={styles.wrapper}>
        {ChoiceComponentList[selectedCategory]}
      </div>
    </>
  );
};

export default Design;
