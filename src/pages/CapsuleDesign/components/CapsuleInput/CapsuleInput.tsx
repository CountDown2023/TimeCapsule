import React from "react";
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
          <div className="capsuleDescription">이루고싶은 목표를 적어보세요</div>
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

        <textarea className="toMe" placeholder="12월 31일의 나에게 한마디" />
      </div>
    </div>
  );
};

export default CapsuleInput;
