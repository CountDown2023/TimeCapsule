import { UserApiUrls } from "api/path";
import axios from "axios";
import { HTTP_STATUS, resultData } from "configs/axios";

export type SignUpRequestData = {
  nickname: string,
  password: string
};

export type SignUpResponseData = {
  code: HTTP_STATUS
}

export const signUp = (data: SignUpRequestData) => {
  return resultData<SignUpResponseData>(
    axios.post(UserApiUrls.signUp(), data)
  );
}
