import "./IconButton.scss";

interface Props {
  alt: string;
  type?: "";
  onClick: () => void;
}

const IconButton = ({ alt, type, onClick }: Props) => {
  // TODO: Icon 타입 추가하기
  return (
    <div className="icon-button__container" onClick={onClick}>
      {type ? "" : alt}
    </div>
  );
};

export default IconButton;
