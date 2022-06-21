import React from "react";
import Choice from "../Choice";
import "./DesignItem.css";

interface Props {
  items: { idx: number; imgSrc: string }[];
  tab: number;
  selected: number;
  selectTabIdx: (tab: number, idx: number) => void;
}

const DesignItem = ({ items, tab, selected, selectTabIdx }: Props) => {
  const selectIdx = (idx: number) => {
    selectTabIdx(tab, idx);
  };

  return (
    <div className="choiceWrapper">
      {items.map((item) => (
        <Choice
          idx={item.idx}
          isSelect={selected === item.idx}
          onClick={selectIdx}
          imgSrc={item.imgSrc}
        />
      ))}
    </div>
  );
};

export default DesignItem;
