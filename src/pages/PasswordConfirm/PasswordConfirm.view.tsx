import React, { useEffect, useState } from "react";
import InputText from "../../components/common/inputText";
import InputForm from "../../components/common/InputForm";
import { PwdConfirmForm } from "./PasswordConfirm";

import "./passwordConfirm.css";

export interface PwdConfirmProps {
  isFailed?: boolean;
  clickSubmit: (data: PwdConfirmForm) => void;
}

const PasswordConfirmView = ({
  isFailed = false,
  clickSubmit
}: PwdConfirmProps) => {
  const [modeValue, setModeValue] = useState<"normal" | "focus" | "warning">(isFailed ? "warning" : "normal")
  const [stateValues, setStateValues] = useState<PwdConfirmForm>({
    currentPwd: ""
  });

  const handleClickEvent = () => {
    clickSubmit(stateValues);
  }

  useEffect(() => {
    setModeValue(isFailed ? "warning" : "normal");
  }, [isFailed])

  return (
    <InputForm
      showBackBtn={true}
      submitButtonText="확인"
      disabledSubmitButton={true}
      onSubmit={handleClickEvent}
    >
      <div className="pwdConfirm-wrap">
        <div
          className="input-comp-wrap"
          onFocus={() => setModeValue("focus")}
          onBlur={() => setModeValue("normal")}
        >
          <div
            className={[
              "div-info",
              modeValue !== "normal" ? "div-hidden" : "",
            ].join(" ")}
          >
            <p>본인 확인을 위해</p>
            <p>비밀번호를 입력해주세요</p>
          </div>
          <InputText
            type="password"
            inputId="confirmPwd"
            mode={modeValue}
            widthSize="medium"
            placeholder="현재 비밀번호"
            onChangeValue={(value: string) =>
              setStateValues({ currentPwd: value })
            }
          />
        </div>
      </div>
    </InputForm>
  );
};

export default PasswordConfirmView;
