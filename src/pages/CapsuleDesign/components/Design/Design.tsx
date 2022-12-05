import React, { useState } from "react";
import DesignItem from "../DesignItem";
import DesignSettings from "../DesignSettings";
import { Bottle01 } from "../../../../assets/images/bottle";
import { Light } from "../../../../assets/images/palette";
import {
  useCapsuleDispatch,
  useCapsuleState,
} from "../../../../hooks/capsuleStore";
import { Bottles, BottlesColors, LetterPapers } from "../../constants";
import classnames from "classnames";
import styles from "./Design.module.scss";

type Category = "병" | "병색상" | "편지지";

const Design = () => {
  const { setBottle, setBottleColor, setLetterPaper } = useCapsuleDispatch();
  const { bottle, bottleColor, letterPaper } = useCapsuleState();

  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const categoryLabelList: Category[] = ["병", "병색상", "편지지"];

  const BottleItem = () => (
    <DesignItem
      items={Bottles}
      selectedItem={bottle}
      selectTabIdx={(idx: number) => {
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
            setBottleColor(idx);
          }}
          className={classnames(styles.colorItem, [
            bottleColor === idx && styles.active,
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
      selectedItem={letterPaper}
      selectTabIdx={(idx: number) => {
        setLetterPaper(idx);
      }}
    />
  );

  const ChoiceComponentList = [BottleItem(), ColorItem(), PaperItem()];
  const PreviewBottleList = [
    <Bottle01 fill={BottlesColors[bottleColor]} />,
    <Bottle01 fill={BottlesColors[bottleColor]} />,
    <Bottle01 fill={BottlesColors[bottleColor]} />,
    <Bottle01 fill={BottlesColors[bottleColor]} />,
    <Bottle01 fill={BottlesColors[bottleColor]} />,
    <Bottle01 fill={BottlesColors[bottleColor]} />,
    <Bottle01 fill={BottlesColors[bottleColor]} />,
    <Bottle01 fill={BottlesColors[bottleColor]} />,
  ];

  return (
    <>
      <div className={styles.preview}>
        <img
          className={styles.previewPaper}
          src={LetterPapers[letterPaper]}
          alt=""
        />
        <div className={styles.preiewBottle}>{PreviewBottleList[bottle]}</div>
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
