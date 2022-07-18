import React, { useState } from "react";
import CapsuleInput from "./components/CapsuleInput";
import Design from "./components/Design";
import DesignNav from "./components/DesignNav";

const CapsuleDesign = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <>
      {page === 0 && <Design />}
      {page === 1 && <CapsuleInput />}
      <DesignNav
        setCurrent={setPage}
        items={["design", "input"]}
        current={page}
      />
    </>
  );
};

export default CapsuleDesign;
