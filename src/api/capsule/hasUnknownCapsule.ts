import { CapsuleApiUrls } from "../../api/path";
import axios from "axios";
import { resultData } from "../../configs/axios";

export type HasUnknownCapsuleResponse = {
  // TODO
};

export const hasUnknownCapsule = () => {
  return resultData<HasUnknownCapsuleResponse>(
    axios.get(CapsuleApiUrls.hasUnknownCapsule())
  );
};
