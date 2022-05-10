import React from "react";
import './inputTxt.css';

interface InputTxtProps {
  type: string;
  size?: 'small' | 'medium' | 'large';
  mode?: 'normal' | 'warning' | 'success';
  placeholder: string;
  onFocus?: () => void;
}

export const InputTxt = ({
  type="text",
  size="medium",
  mode="normal",
  placeholder="placeholder",
  ...props
}: InputTxtProps) => {
  return (
    <input 
      type={type}
      className={`input-txt__${size} ${mode}`}
      placeholder={placeholder}
      {...props}
    />
  );
};
