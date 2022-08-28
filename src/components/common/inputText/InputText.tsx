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
}

export const InputText = ({
  type = "text",
  widthSize = "medium",
  placeholder = "placeholder",
  ...props
}: InputTxtProps) => {

  return (
    <>
    { props.mode !== "normal" &&
      <label htmlFor={props.inputId} className={props.mode}>{placeholder}</label>
    }
      <input 
        id={props.inputId}
        type={type}
        className={`input-txt__${widthSize} ${props.mode}`}
        placeholder={props.mode !== 'normal'? '' : placeholder}
        onChange={(e) => props.onChangeValue(e.target.value)}
      />
    </>
  );
};
