import { Button } from "components/common/button/Button";
import React, { ReactNode, useState } from "react";

import { useNavigate } from 'react-router-dom';

import "./InputForm.css";

export interface InputFormProps {
  pageName: String;
  children: ReactNode;
}

export const InputForm = ({
  ...props
}: InputFormProps) => {
  
  const navigate = useNavigate();

  return  (
    <div className="page-wrap">
      {props.pageName != "SignIn" && (
        <Button
          size='backBtn'
          onClick={() => navigate(-1)}
        />
      )}
      {props.children}
    </div>
  );
};
