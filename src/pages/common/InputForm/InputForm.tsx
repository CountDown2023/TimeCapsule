import { Button } from "components/common/button/Button";
import React, { ReactNode, useState } from "react";

import { useNavigate } from 'react-router-dom';

import "./InputForm.css";

export interface InputFormProps {
  showBackBtn: Boolean;
  onClickBackBtn: Boolean;
  children: ReactNode;
}

export const InputForm = ({
  ...props
}: InputFormProps) => {
  
  const navigate = useNavigate();

  return  (
    <div className="page-wrap">
      {(props.showBackBtn && props.onClickBackBtn) && (
        <Button
          size='backBtn'
          onClick={() => navigate(-1)}
        />
      )}
      {props.children}
    </div>
  );
};
