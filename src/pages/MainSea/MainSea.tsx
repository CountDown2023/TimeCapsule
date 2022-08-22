import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { hasCapsule, hasUnknownCapsule } from "../../api/capsule";
import MainSeaView from "./MainSea.view";

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

  if (isUnknownCapsuleLoading || isCapsuleLoading) {
    return <>로딩중입니다...</>;
  }

  if (isUnknownCapsuleError || isCapsuleError) {
    return <>에러가 발생했습니다. 다시 시도해주세요.</>;
  }

  return (
    <MainSeaView
      unknownCapsule={unknownCapsule ? "" : ""}
      hasCapsule={capsule ? true : false}
      showDescription
      onClickMap={() => navigate("/main/map")}
      onClickCapsule={() => navigate("/capsule/design")}
    />
  );
};

export default MainSea;
