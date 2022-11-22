import React from "react";
import Choice from "../Choice";
import "./DesignItem.css";

interface Props {
  items: string[];
  selectedItem: number | null;
  selectTabIdx: (idx: number) => void;
}

const DesignItem = ({ items, selectedItem, selectTabIdx }: Props) => {
  const selectIdx = (idx: number) => {
    selectTabIdx(idx);
  };

  return (
    <div className="choiceWrapper">
      {items.map((item, idx) => (
        <Choice
          idx={idx}
          key={idx}
          isSelect={selectedItem === idx}
          onClick={() => selectIdx(idx)}
          imgSrc={item}
        />
      ))}
    </div>
  );
};

export default DesignItem;