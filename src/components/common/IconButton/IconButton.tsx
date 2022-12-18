import classnames from "classnames";
import {
  AiFillCheckCircle,
  AiOutlineLeft,
  AiOutlineSetting,
} from "react-icons/ai";
import styles from "./IconButton.module.scss";

interface Props {
  alt?: string;
  type?: "SETTING" | "BACK" | "SAVE";
  onClick: () => void;
  className?: string;
}

const IconButton = ({ type, onClick, className }: Props) => {
  // TODO: Icon 타입 추가하기
  return (
    <div
      className={classnames([styles.container, className])}
      onClick={onClick}
    >
      {type === "SETTING" && <AiOutlineSetting size={40} />}
      {type === "BACK" && <AiOutlineLeft size={30} />}
      {type === "SAVE" && <AiFillCheckCircle size={40} color="#C1FEFA" />}
    </div>
  );
};

export default IconButton;
