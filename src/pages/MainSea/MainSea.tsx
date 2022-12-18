import React from "react";
import { useNavigate } from "react-router-dom";
import useMainSea from "./hooks/useMainSea";
import MainSeaView from "./MainSea.view";

const MainSea = () => {
  const navigate = useNavigate();

  const { isLoading, isError, unknownCapsule, hasCapsule } = useMainSea();

  if (isLoading) {
    return <>로딩중입니다...</>;
  }

  if (isError) {
    return <>에러가 발생했습니다. 다시 시도해주세요.</>;
  }

  return (
    <MainSeaView
      unknownCapsule={unknownCapsule}
      hasCapsule={hasCapsule}
      showDescription
      onClickMap={() => navigate("/main/map")}
      onClickCapsule={() => navigate("/capsule/design")}
    />
  );
};

export default MainSea;
