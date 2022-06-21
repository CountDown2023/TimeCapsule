import React from "react";
import "./inputText.css";

interface InputTxtProps extends React.HTMLProps<HTMLInputElement>  {
  type: string;
  inputId?: string;
  widthSize?: "small" | "medium" | "large";
  mode?: "normal" | "warning" | "focus";
  placeholder: string;
  onFocus?: () => void;
  onChangeValue: (val: string) => void;
  // onChangeMode: (val: "normal" | "warning" | "focus") => void;
}

export const InputText = ({
  type = "text",
  widthSize = "medium",
  // mode = "normal",
  placeholder = "placeholder",
  ...props
}: InputTxtProps) => {
  const [propsValue, setPropsValue] = React.useState({ "mode": props.mode, "placeholder": placeholder });

  return (
    <>
    { props.mode !== "normal" &&
      <label htmlFor={props.inputId} className={propsValue.mode}>{placeholder}</label>
    }
      <input 
        id={props.inputId}
        type={type}
        className={`input-txt__${widthSize} ${propsValue.mode}`}
        placeholder={propsValue.placeholder}
        onChange={(e) => props.onChangeValue(e.target.value)}
      />
    </>
  );
};
