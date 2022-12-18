import { AiOutlineSetting } from "react-icons/ai";
import styles from "./IconButton.module.scss";

interface Props {
  alt: string;
  type?: "SETTING";
  onClick: () => void;
}

const IconButton = ({ alt, type, onClick }: Props) => {
  // TODO: Icon 타입 추가하기
  return (
    <div className={styles.container} onClick={onClick}>
      {type === "SETTING" ? <AiOutlineSetting size={40} /> : alt}
    </div>
  );
};

export default IconButton;
