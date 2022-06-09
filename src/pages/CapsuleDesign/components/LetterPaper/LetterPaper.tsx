import React from "react";
import Choice from "../Choice";

const LetterPaper = () => {
  return (
    <div className="choiceWrapper">
      <div className="rowWrapper">
        <Choice />
        <Choice />
        <Choice />
        <Choice />
      </div>
      <div className="rowWrapper">
        <Choice />
        <Choice />
        <Choice />
        <Choice />
      </div>
    </div>
  );
};

export default LetterPaper;
