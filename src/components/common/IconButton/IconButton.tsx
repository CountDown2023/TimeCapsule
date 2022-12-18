import classnames from "classnames";
import {
  AiFillCheckCircle,
  AiFillSetting,
  AiOutlineLeft,
} from "react-icons/ai";
import styles from "./IconButton.module.scss";

interface Props {
  alt?: string;
  type?: "SETTING" | "BACK" | "SAVE" | "SEA" | "MAP" | "CAPSULE";
  onClick: () => void;
  className?: string;
}

const IconButton = ({ alt, type, onClick, className }: Props) => {
  // TODO: Icon 타입 추가하기
  return (
    <div
      className={classnames([styles.container, className])}
      onClick={onClick}
    >
      {type === "SETTING" && <AiFillSetting size={50} color="#ffffff" />}
      {type === "BACK" && <AiOutlineLeft size={30} />}
      {type === "SAVE" && <AiFillCheckCircle size={40} color="#C1FEFA" />}
      {type === "SEA" && alt}
      {type === "MAP" && alt}
      {type === "CAPSULE" && alt}
    </div>
  );
};

export default IconButton;
