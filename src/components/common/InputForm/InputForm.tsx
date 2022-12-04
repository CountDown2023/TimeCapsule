import Button from "components/common/button";
import React, { ReactNode } from "react";

import { useNavigate } from 'react-router-dom';

import "./InputForm.css";

export interface InputFormProps {
  showBackBtn?: boolean;
  onClickBackBtn?: boolean;
  children: ReactNode;
  submitButtonText: string;
  disabledSubmitButton: boolean;
  onSubmit: () => void;
}

const InputForm = ({
  showBackBtn = false,
  submitButtonText = "",
  disabledSubmitButton = true,
  children,
  onSubmit
}: InputFormProps) => {
  
  const navigate = useNavigate();

  return (
    <div className="page-wrap">
      {showBackBtn && <Button onClick={() => navigate(-1)}>{`<`}</Button>}
      {children}
      <div className="btn-wrap">
        {/* TODO: isDisable 처리용 로직 필요 */}
        <Button
          size="bottom"
          theme="primary"
          isDisabled={disabledSubmitButton}
          onClick={onSubmit}
        >
          {submitButtonText}
        </Button>
      </div>
    </div>
  );
};

export default InputForm;
