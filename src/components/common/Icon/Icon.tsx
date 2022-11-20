import { SpinnerBigBottom, SpinnerTop } from "static/logo";
import classnames from "classnames";
import styles from "./Icon.module.scss";

interface Props {
  classNames?: string;
}

const Icon = ({ classNames }: Props) => {
  return (
    <div className={classnames([styles.container, classNames])}>
      <img className={styles.spinner} src={SpinnerTop} alt="" />
      <img
        className={classnames([styles.spinner, styles.bottom])}
        src={SpinnerBigBottom}
        alt=""
      />
    </div>
  );
};

export default Icon;
