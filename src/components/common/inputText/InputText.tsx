import React from "react";
import "./inputText.css";
import classNames from "classnames";

interface InputTxtProps extends React.HTMLProps<HTMLInputElement> {
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
  inputId="",
  mode,
  onFocus,
  onChangeValue
}: InputTxtProps) => {
  return (
    <>
      {mode !== "normal" && (
        <label htmlFor={inputId} className={mode}>
          {placeholder}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={classNames([
          "input",
          `input-txt__${widthSize} ${mode}`,
        ])}
        placeholder={mode !== "normal" ? "" : placeholder}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </>
  );
};
