import { UserApiUrls } from "api/path";
import axios from "axios";
import { HTTP_STATUS, resultData } from "configs/axios";

export type SignUpBody = {
  nickname: string,
  password: string
};

export type SignUpResponse = {
  code: HTTP_STATUS
}

export const signUp = (data: SignUpBody) => {
  return resultData<SignUpResponse>(
    axios.post(UserApiUrls.signUp(), data)
  );
}
