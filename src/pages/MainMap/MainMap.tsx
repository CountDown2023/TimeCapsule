import React from "react";
import { useQuery } from "react-query";
import { getCapsuleInfo } from "../../api/capsule";
import MainMapView from "./MainMap.view";

const MainMap = () => {
  const { isLoading, data, isError } = useQuery("getCapsuleInfo", () =>
    getCapsuleInfo()
  );

  if (isLoading) {
    return <>로딩중입니다...</>;
  }

  if (isError) {
    return <>에러가 발생했습니다. 다시 시도해주세요.</>;
  }

  return <MainMapView days={data ? "" : ""} />;
};

export default MainMap;
