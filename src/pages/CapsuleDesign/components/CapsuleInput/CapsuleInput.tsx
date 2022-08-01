import React from "react";
import DesignNav from "../DesignNav";
import "./CapsuleInput.css";

const CapsuleInput = () => {
  return (
    <div className="inputWrapper">
      <button className="capsuleInputBtn">작성완료</button>
      <div className="inputWrapper2">
        <input
          className="capsuleName"
          type="text"
          placeholder="캡슐 이름을 입력하세요."
        />
        <ul className="capsuleInput">
          <h6>이루고싶은 목표를 적어보세요</h6>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
          <li className="capsuleLi">
            <input className="capsuleLiInput" type="text" />
          </li>
        </ul>
        <input
          className="toMe"
          type="text"
          placeholder="12월 31일의 나에게 한마디"
        />
      </div>
    </div>
  );
};

export default CapsuleInput;
