import React from "react";
import useMainMap from "./hooks/useMainMap";
import MainMapView from "./MainMap.view";

const MainMap = () => {
  const { isLoading, days, isError } = useMainMap();

  if (isLoading) {
    return <>로딩중입니다...</>;
  }

  if (isError) {
    return <>에러가 발생했습니다. 다시 시도해주세요.</>;
  }

  return <MainMapView days={days} />;
};

export default MainMap;
