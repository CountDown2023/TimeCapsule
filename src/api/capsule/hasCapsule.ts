import { CapsuleApiUrls } from "api/path";
import axios from "axios";
import { resultData } from "configs/axios";

export type HasCapsuleResponse = {
  // TODO
};

export const hasCapsule = () => {
  return resultData<HasCapsuleResponse>(
    axios.post(CapsuleApiUrls.hasCapsule())
  );
};
