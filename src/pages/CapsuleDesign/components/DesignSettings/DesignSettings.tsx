import React, { useState } from "react";
import "./DesignSettings.css";

interface Props {
  current: number;
  setCurrent: (next: number) => void;
  items: string[];
}

const DesignSettings = ({ current, items, setCurrent }: Props) => {
  let [tab, setTab] = useState(0);
  return (
    <div className="settings">
      {items.map((item, index) => (
        <div
          className={
            index === current ? "activeSettingsTab" : "settingsTab-item"
          }
          onClick={() => setCurrent(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DesignSettings;
