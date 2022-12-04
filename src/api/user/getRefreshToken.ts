import axiosInstance from "api";
import { UserApiUrls } from "api/path";

export type GetRefreshTokenRequestData = {
  nickname: string,
  refreshToken: string
}

export const getRefreshToken = (data: GetRefreshTokenRequestData) => {
  return axiosInstance.post(UserApiUrls.getRefreshToken(), data);
}
