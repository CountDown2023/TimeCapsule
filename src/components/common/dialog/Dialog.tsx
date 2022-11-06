import Button from "./Button";
import "./Dialog.scss";

export interface Props {
  isShow: boolean;
  title: React.ReactNode;
  description?: string;
  okButton?: string;
  cancleButton?: string;
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
  onClickOkButton,
  onClickCancleButton,
  className,
}: Props) => {
  return (
    <>
      {isShow && (
        <div className={`dialog`}>
          <div className="dialog__title">{title}</div>
          <div className="dialog__description">{description}</div>
          <div className="dialog__button">
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
      )}
    </>
  );
};

export default Dialog;
