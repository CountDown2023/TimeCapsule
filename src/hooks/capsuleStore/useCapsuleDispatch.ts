import { useContext } from "react";
import { CapsuleDispatchContext } from "store";

export const useCapsuleDispatch = () => {
  const dispatch = useContext(CapsuleDispatchContext);

  if (!dispatch) {
    throw new Error("capsule dispatch is undefined");
  }

  return dispatch;
};
