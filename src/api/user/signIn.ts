import axiosInstance from "api";
import { UserApiUrls } from "api/path";

export type SignInBody = {
  nickname: string,
  password: string
}

export const signIn = (data: SignInBody) => {
  return axiosInstance.post(UserApiUrls.signin(), data);
}
