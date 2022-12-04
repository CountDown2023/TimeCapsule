import axiosInstance from "api";
import { UserApiUrls } from "api/path";

export type SignInRequestData = {
  nickname: string,
  password: string
}

export const signIn = (data: SignInRequestData) => {
  return axiosInstance.post(UserApiUrls.signin(), data);
}
