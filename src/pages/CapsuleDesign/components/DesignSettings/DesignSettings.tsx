import classNames from "classnames";
import styles from "./DesignSettings.module.css";
interface Props {
  current: number;
  setCurrent: (next: number) => void;
  items: string[];
}

const DesignSettings = ({ current, items, setCurrent }: Props) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div
          key={item}
          className={classNames([
            styles.item,
            `${index === current && styles.active}`,
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
