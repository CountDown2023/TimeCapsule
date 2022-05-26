import React, { useState } from "react";
import "./DesignNav.css";
import { Link } from "react-router-dom";

interface Props {
  current: number;
  setCurrent: (next: number) => void;
  items: string[];
}

const DesignNav = ({ current, items, setCurrent }: Props) => {
  return (
    <nav className="wrapper">
      {items.map((item, index) => (
        <div
          className={index === current ? "active" : "nav-item"}
          onClick={() => setCurrent(index)}
        >
          {index}
        </div>
      ))}
    </nav>
  );
};

export default DesignNav;
