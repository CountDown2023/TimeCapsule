import Button from "./Button";
import classnames from "classnames";
import styles from "./Dialog.module.scss";

export interface Props {
  isShow: boolean;
  title: React.ReactNode;
  description?: string;
  okButton?: string;
  cancleButton?: string;
  useDim?: boolean;
  onClickOkButton?: () => void;
  onClickCancleButton?: () => void;
  className?: string;
}

const Dialog = ({
  isShow,
  title,
  description,
  okButton,
  cancleButton,
  useDim = false,
  onClickOkButton,
  onClickCancleButton,
  className,
}: Props) => {
  if (!isShow) {
    return null;
  }

  return (
    <div className={classnames([useDim && styles.dark])}>
      <div className={classnames([styles.dialog, className])}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.button}>
          {okButton && (
            <Button onClick={onClickOkButton} color="blue">
              {okButton}
            </Button>
          )}
          {cancleButton && (
            <Button onClick={onClickCancleButton} color="red">
              {cancleButton}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
