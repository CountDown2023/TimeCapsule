import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { hasCapsule, hasUnknownCapsule } from "../../api/capsule";

const MainSea = () => {
  const navigate = useNavigate();

  const {
    isLoading: isUnknownCapsuleLoading,
    data: unknownCapsule,
    isError: isUnknownCapsuleError,
  } = useQuery("hasUnknownCapsule", () => hasUnknownCapsule());

  const {
    isLoading: isCapsuleLoading,
    data: capsule,
    isError: isCapsuleError,
  } = useQuery("hasCapsule", () => hasCapsule());

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
