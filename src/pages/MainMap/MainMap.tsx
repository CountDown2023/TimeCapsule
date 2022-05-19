import React from "react";
import { useNavigate } from "react-router-dom";
import { UrlPaths } from "../../routes";

const MainMap = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/main/sea");
        }}
      >
        바다로 가기
      </button>
      메인 화면 - 지도
    </div>
  );
};

export default MainMap;
