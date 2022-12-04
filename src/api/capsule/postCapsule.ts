import { CapsuleApiUrls } from "api/path";
import axios from "axios";
import { resultData } from "configs/axios";

export type PostCapsuleBody = {
  name: string;
  bottle_choice: number;
  bottle_color: number;
  letter_paper: number;
  content: string;
  goals: string[];
};

export type PostCapsuleResponse = {
  capsule_id: number;
  member_id: number;
  name: string;
  bottle_choice: number;
  bottle_color: number;
  letter_paper: number;
  content: string;
  goals: string[];
};

export const postCapsule = (body: PostCapsuleBody) => {
  return resultData<PostCapsuleResponse>(
    axios.post(CapsuleApiUrls.postCapsule(), body)
  );
};
