import React from 'react';
import styles from "./button.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export interface Props {
  theme?: "primary" | "secondary";
  backgroundColor?: string;
  size?: "small" | "medium" | "large" | "bottom";
  onClick?: () => void;
  isDisabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Button = ({
  theme = "secondary",
  size = "medium",
  backgroundColor,
  className,
  isDisabled = false,
  children,
  ...props
}: Props) => {
  return (
    <button
      type="button"
      className={cx("button", size, theme, className)}
      style={{ backgroundColor }}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
