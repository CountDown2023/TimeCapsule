import { Button } from "components/common/button/Button";
import React, { ReactNode, useState } from "react";

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

export const InputForm = ({
  showBackBtn = false,
  onClickBackBtn = false,
  submitButtonText = "",
  disabledSubmitButton = true,
  children,
  onSubmit
}: InputFormProps) => {
  
  const navigate = useNavigate();

  return  (
    <div className="page-wrap">
      {(showBackBtn && onClickBackBtn) && (
        <Button
          size='backBtn'
          onClick={() => navigate(-1)}
        />
      )}
      {children}
      <div className='btn-wrap'>
        {/* TODO: isDisable 처리용 로직 필요 */}
        <Button size='bottom' label={submitButtonText} onClick={onSubmit} />
      </div>
    </div>
  );
};
