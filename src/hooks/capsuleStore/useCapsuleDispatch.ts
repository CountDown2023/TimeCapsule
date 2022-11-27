import { useContext } from "react";
import { CapsuleDispatchContext } from "store";

export const useCapsuleDispatch = () => {
  const dispatch = useContext(CapsuleDispatchContext);

  if (!dispatch) {
    throw new Error("capsule dispatch is undefined");
  }
  
  const setBottle = (bottle: number) => {
    dispatch({ type: "SET_BOTTLE", payload: bottle });
  };

  const setBottleColor = (bottleColor: number) => {
    dispatch({ type: "SET_BOTTLE_COLOR", payload: bottleColor });
  };

  const setLetterPaper = (letterPaper: number) => {
    dispatch({ type: "SET_LETTER_PAPER", payload: letterPaper });
  };

  return { dispatch, setBottle, setBottleColor, setLetterPaper };
};
