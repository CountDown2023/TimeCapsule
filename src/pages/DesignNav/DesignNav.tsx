import React, { useState } from "react";
import "./DesignNav.css";
import { Link } from "react-router-dom";
const DesignNav = (activeNav: any) => {
  // let [activeNav, setActiveNav] = useState(0);
  return (
    <nav className="wrapper">
      <Link
        to="../design"
        // onClick={() => setActiveNav(1)}
        className={activeNav === 1 ? "nav-item active" : "nav-item"}
      >
        design
      </Link>

      <Link
        to="../input"
        // onClick={() => setActiveNav(2)}
        className={activeNav === 2 ? "nav-item active" : "nav-item"}
      >
        input
      </Link>
    </nav>
  );
};

export default DesignNav;
