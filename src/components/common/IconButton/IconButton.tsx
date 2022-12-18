import classnames from "classnames";
import {
  AiFillCheckCircle,
  AiFillCompass,
  AiFillPlusCircle,
  AiFillPushpin,
  AiFillSetting,
  AiOutlineLeft,
} from "react-icons/ai";
import styles from "./IconButton.module.scss";

interface Props {
  alt?: string;
  type?: "SETTING" | "BACK" | "SAVE" | "SEA" | "MAP" | "PLUS";
  onClick: () => void;
  className?: string;
}

const IconButton = ({ type, onClick, className }: Props) => {
  return (
    <div
      className={classnames([styles.container, className])}
      onClick={onClick}
    >
      {type === "SETTING" && <AiFillSetting size={50} color="#ffffff" />}
      {type === "BACK" && <AiOutlineLeft size={30} />}
      {type === "SAVE" && <AiFillCheckCircle size={40} color="#C1FEFA" />}
      {type === "MAP" && <AiFillCompass size={50} color="#ffffff" />}
      {type === "SEA" && <AiFillPushpin size={50} color="#ffffff" />}
      {type === "PLUS" && <AiFillPlusCircle size={50} color="#ffffff" />}
    </div>
  );
};

export default IconButton;
