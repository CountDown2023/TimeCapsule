import { UserApiUrls } from "api/path";
import axios from "axios";
import { resultData } from "configs/axios";

export type SignInBody = {
  nickname: string,
  password: string
}

export type SignInResponse = {
  access_token: "",
  refresh_token: ""
}

export const signIn = (data: SignInBody) => {
  console.log("로그인 정보 : ", data.nickname, ", ", data.password);
  return resultData<SignInResponse>(
    axios.post(UserApiUrls.signin(), data)
  )
  .then((res) => {
    const accessToken = res.access_token;
    axios.defaults.headers.common['Authorization'] = `${accessToken}`;
  })
}
