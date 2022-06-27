import React from "react";

import "./Button.scss";

interface Props {
  color?: "blue" | "red";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ color, children, onClick, className }: Props) => {
  return (
    <div className={`Button ${className ?? ""}`}>
      <button onClick={onClick}>{children}</button>
      <div className={color && `Button__${color}`} />
    </div>
  );
};

export default Button;
