import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getCapsuleInfo } from "../../api/capsule";

const MainMap = () => {
  const navigate = useNavigate();

  const { isLoading, data, isError } = useQuery("getCapsuleInfo", () =>
    getCapsuleInfo()
  );

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
