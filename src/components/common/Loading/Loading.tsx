import styles from "./Loading.module.scss";
import classNames from "classnames";
import { SpinnerBottom, SpinnerTop } from "static/logo";

export interface Props {
  isFull?: boolean;
  hasDarkBackground?: boolean;
}

const Loading = ({ isFull = false, hasDarkBackground = false }: Props) => {
  return (
    <div
      className={classNames([
        styles.container,
        isFull && styles.full,
        hasDarkBackground && styles.dark,
      ])}
    >
      <div className={styles.center}>
        <img
          className={classNames([styles.spinner, styles.top])}
          src={SpinnerTop}
          alt=""
        />
        <img
          className={classNames([styles.spinner, styles.bottom])}
          src={SpinnerBottom}
          alt=""
        />
      </div>
    </div>
  );
};

export default Loading;
