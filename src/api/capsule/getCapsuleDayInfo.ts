import { CapsuleApiUrls } from "api/path";
import axios from "axios";
import { resultData } from "configs/axios";

export type GetCapsuleDayInfoPath = {
  capsuleId: number;
};

export type GetCapsuleDayInfoResponse = {
  capsule_id: number;
  days: number;
};

export const getCapsuleDayInfo = ({ capsuleId }: GetCapsuleDayInfoPath) => {
  return resultData<GetCapsuleDayInfoResponse>(
    axios.get(CapsuleApiUrls.getCapsuleDayInfo(capsuleId))
  );
};
