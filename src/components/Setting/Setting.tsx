import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import "./Setting.scss";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

const Setting = ({ isShow, onClose }: Props) => {
  const navigation = useNavigate();

  return (
    <>
      {isShow && (
        <div className="setting">
          <div className="setting-view">
            <button className="setting-view__btn-close" onClick={onClose}>
              <AiOutlineClose size={40} />
            </button>
            <div className="setting-view__btn-main">
              <button onClick={() => navigation("/user/password/:nickname")}>
                <IoMdLock size={40} />
                <br />
                비밀번호 수정
              </button>
              <button onClick={() => navigation("/information")}>
                <AiOutlineInfoCircle size={40} />
                <br />
                정보
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Setting;
