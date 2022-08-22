import "./DesignSettings.css";
import classNames from "classnames";

interface Props {
  current: number;
  setCurrent: (next: number) => void;
  items: string[];
}

const DesignSettings = ({ current, items, setCurrent }: Props) => {
  return (
    <div className="settings">
      {items.map((item, index) => (
        <div
          className={classNames([
            "settingsTab-item",
            `${index === current && "activeSettingsTab"}`,
          ])}
          onClick={() => setCurrent(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DesignSettings;
