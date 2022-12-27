import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

type ErrorResponse = {
  // errorCode: string;
  // errorMessage?: string;
  // code: string;

  message: string,
  code: string,
  status: number
};

/**
 * 토큰이 필요한 요청인데 토큰이 없는 경우,
 * 잘못된 요청이라는 안내 메세지 노출
 *
 * 해당 요청을 취소하고, 로그인 페이지로 안내
 */
const requestOnFullFilled = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  // TODO: axios에 토큰이 필요한데 토큰이 없는 경우, 에러 발생 시키기
  // 토큰이 필요 없는 경우, 로그인, 회원가입, 비밀번호 찾기
  return config;
};

/**
 * 1. 토큰을 새로 발급하라는 에러가 내려온 경우,
 * 토큰 리프레쉬 요청을 보내고, 새로 발급 받은 토큰으로
 * 기존 재요청 수행
 *
 * 2. response.data.result 값을 기준으로 AxiosError 발생
 */
const responseOnFullFilled = async (
  response: AxiosResponse
): Promise<AxiosResponse> => {
  console.log("API SUCCESS", response);

  if (response.config?.url === "/api/member/login") {
    localStorage.setItem("accessToken", response?.data?.["access_token"]);
    localStorage.setItem("refreshToken", response?.data?.["refresh_token"]);
  }

  return response;
};

/**
 * 여기에 감지 되는 에러는
 * 서버에서 의도적으로 발생시킨 에러가 아니라
 * 예상하지 못한 에러일 경우.
 *
 * GlobalErrorBoundary에서 처리할 에러 발생
 */
const responseOnRejected = async (
  error: AxiosError<ErrorResponse>
): Promise<AxiosError<ErrorResponse>> => {
  console.log("API ERROR", error);

  return new Promise((_, reject) => {
    if (error.response?.data?.status === 401) {
      alert("다시 로그인해주세요.");
      window.location.href = "/user/signIn";
      return;
    }

    if (error.code) {
      switch (error.code) {
        case "ERR_BAD_REQUEST":
        case "INVALID_REQUEST":
        case "DUPLICATED_USER":
        case "AUTHENTICATION_FAILED":
        case "ENTRY_NOT_FOUND":
        case "CAPSULE_ALREADY_EXISTS":
          return reject(new AxiosError(error.response?.data.message));
      }
    }
    return reject(new AxiosError("UNKNOWN_ERROR"));
  });
};

export function initAxios() {
  const accessToken = localStorage.getItem("accessToken");
  axios.defaults.headers.common["Authorization"] = accessToken;

  axios.interceptors.request.use(requestOnFullFilled);
  axios.interceptors.response.use(responseOnFullFilled, responseOnRejected);
}
