import React, { useState } from "react";
import DesignItem from "../DesignItem";
import DesignSettings from "../DesignSettings";
import { Bottle01 } from "assets/images/bottle";
import { Light } from "assets/images/palette";
import { useCapsuleDispatch } from "hooks/capsuleStore";
import { Bottles, BottlesColors, LetterPapers } from "../../constants";
import classnames from "classnames";
import styles from "./Design.module.scss";

type Category = "병" | "병색상" | "편지지";

const Design = () => {
  const { setBottle, setBottleColor, setLetterPaper } = useCapsuleDispatch();

  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const categoryLabelList: Category[] = ["병", "병색상", "편지지"];

  const [selectedItem, setSelectedItem] = useState<Record<Category, number>>({
    병: 0,
    병색상: 0,
    편지지: 0,
  });

  const BottleItem = () => (
    <DesignItem
      items={Bottles}
      selectedItem={selectedItem["병"]}
      selectTabIdx={(idx: number) => {
        setSelectedItem({
          ...selectedItem,
          병: idx,
        });
        setBottle(idx);
      }}
    />
  );

  const ColorItem = () => (
    <div className={styles.itemWrapper}>
      {BottlesColors.map((color, idx) => (
        <div
          key={color}
          onClick={() => {
            setSelectedItem({
              ...selectedItem,
              병색상: idx,
            });
            setBottleColor(idx);
          }}
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
      items={LetterPapers}
      selectedItem={selectedItem["편지지"]}
      selectTabIdx={(idx: number) => {
        setSelectedItem({
          ...selectedItem,
          편지지: idx,
        });
        setLetterPaper(idx);
      }}
    />
  );

  const ChoiceComponentList = [BottleItem(), ColorItem(), PaperItem()];
  const PreviewBottleList = [
    <Bottle01 fill={BottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={BottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={BottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={BottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={BottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={BottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={BottlesColors[selectedItem["병색상"]]} />,
    <Bottle01 fill={BottlesColors[selectedItem["병색상"]]} />,
  ];

  return (
    <>
      <div className={styles.preview}>
        <img
          className={styles.previewPaper}
          src={LetterPapers[selectedItem["편지지"]]}
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
