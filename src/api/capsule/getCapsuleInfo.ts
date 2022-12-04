import { CapsuleApiUrls } from "../../api/path";
import axios from "axios";
import { resultData } from "../../configs/axios";

export type GetCapsuleInfoResponse = {
  capsule_id: number;
  member_id: number;
  name: string;
  bottle_choice: number;
  bottle_color: number;
  letter_paper: number;
  content: string;
  goals: string[];
}[];

export const getCapsuleInfo = () => {
  return resultData<GetCapsuleInfoResponse>(
    axios.get(CapsuleApiUrls.getCapsuleInfo())
  );
};
