import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/button";
import IconButton from "../IconButton";

import styles from "./InputForm.module.css";

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
  onSubmit,
}: InputFormProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {showBackBtn && (
        <IconButton
          className={styles.backButton}
          type="BACK"
          onClick={() => navigate(-1)}
        />
      )}

      {children}
      <div className={styles.buttonContainer}>
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
