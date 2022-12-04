import axiosInstance from "api";
import { UserApiUrls } from "api/path";

export type GetRefreshTokenBody = {
  nickname: string,
  refreshToken: string
}

export const getRefreshToken = (data: GetRefreshTokenBody) => {
  return axiosInstance.post(UserApiUrls.getRefreshToken(), data);
}
