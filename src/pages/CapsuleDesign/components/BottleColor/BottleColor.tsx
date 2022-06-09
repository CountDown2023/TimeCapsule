import React from "react";
import Choice from "../Choice";
import "./BottleColor.css";

const BottleColor = () => {
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

export default BottleColor;
