import { CapsuleApiUrls } from "api/path";
import axios from "axios";
import { resultData } from "configs/axios";

export type GetCapsuleInfoResponse = {
  // TODO
};

export const getCapsuleInfo = () => {
  return resultData<GetCapsuleInfoResponse>(
    axios.post(CapsuleApiUrls.getCapsuleInfo())
  );
};
