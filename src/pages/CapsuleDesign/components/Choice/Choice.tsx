import React from "react";
import "./Choice.css";

interface Props {
  imgSrc: string;
  isSelect: boolean;
  idx: number;
  onClick: (c: number) => void;
}

const Choice = ({ imgSrc, isSelect, idx, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(idx)}
      className={isSelect ? "choice" : "notChoice"}
    >
      <img className="choiceImg" src={imgSrc} alt="" />
    </div>
  );
};

export default Choice;
