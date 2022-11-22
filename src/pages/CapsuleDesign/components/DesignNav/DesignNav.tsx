import React from "react";
import classNames from "classnames";
import styles from "./DesignNav.module.css";

interface Props {
  current: number;
  setCurrent: (next: number) => void;
  items: string[];
}

const DesignNav = ({ current, items, setCurrent }: Props) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <div
          key={item}
          className={classNames([
            styles.tab,
            index === current && styles.active,
          ])}
          onClick={() => setCurrent(index)}
        />
      ))}
    </div>
  );
};

export default DesignNav;
