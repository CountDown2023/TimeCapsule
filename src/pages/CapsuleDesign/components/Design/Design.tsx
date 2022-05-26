import React from "react";
import DesignNav from "../DesignNav";
import DesignSettings from "../DesignSettings";
import "./Design.css";
const Design = () => {
  return (
    <div className="designWrapper">
      <div className="preview">미리보기</div>
      <DesignSettings />
    </div>
  );
};

export default Design;
