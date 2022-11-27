import { createContext, Dispatch, useReducer } from "react";

const initialState = {
  bottle: 0,
  bottleColor: 0,
  letterPaper: 0,
};

export type CapsuleState = {
  bottle: number;
  bottleColor: number;
  letterPaper: number;
};

export const CapsuleStateContext = createContext<CapsuleState>(initialState);

type CapsuleAction =
  | { type: "SET_BOTTLE"; payload: number }
  | { type: "SET_BOTTLE_COLOR"; payload: number }
  | { type: "SET_LETTER_PAPER"; payload: number };

type CapsuleDispatch = Dispatch<CapsuleAction>;

export const CapsuleDispatchContext =
  createContext<CapsuleDispatch | undefined>(undefined);

export const capsuleReducer = (
  state: CapsuleState,
  action: CapsuleAction
): CapsuleState => {
  switch (action.type) {
    case "SET_BOTTLE":
      return { ...state, bottle: action.payload };
    case "SET_BOTTLE_COLOR":
      return { ...state, bottleColor: action.payload };
    case "SET_LETTER_PAPER":
      return { ...state, letterPaper: action.payload };
    default:
      return state;
  }
};

export const CapsuleContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(capsuleReducer, initialState);

  return (
    <CapsuleDispatchContext.Provider value={dispatch}>
      <CapsuleStateContext.Provider value={state}>
        {children}
      </CapsuleStateContext.Provider>
    </CapsuleDispatchContext.Provider>
  );
};
