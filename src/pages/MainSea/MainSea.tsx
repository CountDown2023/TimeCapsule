import React from "react";
import { useNavigate } from "react-router-dom";
import { UrlPaths } from "../../routes";

const MainSea = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/main/map");
        }}
      >
        지도로 가기
      </button>
      메인 화면 - 바다
    </div>
  );
};

export default MainSea;
