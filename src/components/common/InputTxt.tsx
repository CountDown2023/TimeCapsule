import React from "react";
import "./inputTxt.css";

interface InputTxtProps {
  type: string;
  size?: "small" | "medium" | "large";
  mode?: "normal" | "warning" | "success";
  placeholder: string;
  onFocus?: () => void;
  onChangeValue: (val: string) => void;
}

export const InputTxt = ({
  type = "text",
  size = "medium",
  mode = "normal",
  placeholder = "placeholder",
  ...props
}: InputTxtProps) => {
  let [txtValue, setTxtValue] = React.useState("");

  const onChangeTxtValue = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event : ", e.target.value);
    // const value = e.target.value;

    // setTxtValue(value);

    // props.onChangeValue(txtValue);
  };

  return (
    <input
      type={type}
      name='email'
      className={`input-txt__${size} ${mode}`}
      placeholder={placeholder}
      onChange={onChangeTxtValue}
      {...props}
    />
  );
};
