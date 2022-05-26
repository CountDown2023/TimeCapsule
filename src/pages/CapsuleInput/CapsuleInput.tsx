import React from "react";
import DesignNav from "../DesignNav";
import "./CapsuleInput.css";
const CapsuleInput = () => {
  return (
    <div className="inputWrapper">
      <div className="inputWrapper2">
        <input
          className="capsuleName"
          type="text"
          placeholder="캡슐 이름을 입력하세요."
        />
        <ul className="capsuleInput">
          <h3>이루고싶은 목표를 적어보세요</h3>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <input
          className="tome"
          type="text"
          placeholder="12월 31일의 나에게 한마디"
        />
      </div>
      <DesignNav activeNav={2} />
    </div>
  );
};

export default CapsuleInput;
