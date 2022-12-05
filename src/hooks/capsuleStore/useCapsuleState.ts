import { useContext } from "react";
import { CapsuleStateContext } from "../../store";

export const useCapsuleState = () => {
  const state = useContext(CapsuleStateContext);

  return state;
};
