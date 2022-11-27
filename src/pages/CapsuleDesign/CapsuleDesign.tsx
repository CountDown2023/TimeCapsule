import React, { useState } from "react";
import CapsuleInput from "./components/CapsuleInput";
import Design from "./components/Design";
import DesignNav from "./components/DesignNav";
import styles from "./CapsuleDesign.module.scss";

const CapsuleDesign = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <div className={styles.container}>
        {page === 0 && <Design />}
        {page === 1 && <CapsuleInput />}
      </div>
      <DesignNav
        setCurrent={setPage}
        items={["design", "input"]}
        current={page}
      />
    </>
  );
};

export default CapsuleDesign;
