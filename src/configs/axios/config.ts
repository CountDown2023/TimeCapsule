import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

type ErrorResponse = {
  errorCode: string;
  errorMessage?: string;
  code: string;
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
  // TODO: 토큰 새로 발급이 필요한 경우 처리 로직 케이스 추가
  // 서버에서 내려오는 응답값 확인 후 수정 예정
  // if (response.data === "SUCCESS") {
    // return { ...response, data: response.data };
  // } else {
  //   throw new Error();
    // throw new AxiosError(
    //   response.data.error.message,
    //   "", // TODO: res.data.error.code를 가지고 AxiosErrorCode로 설정
    //   response.config,
    //   response.request,
    //   response
    // );
  // }

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
  error: AxiosError
): Promise<AxiosError<ErrorResponse>> => {
  return new Promise((_, reject) => {
    const { code } = error;

    if (code) {
      switch (code) {
        case "ERR_BAD_REQUEST":
        case "INVALID_REQUEST":
          reject(new Error("잘못된 요청입니다."));
          return;
        case "DUPLICATED_USER":
          reject(new Error("중복된 이메일 혹은 닉네임이 존재합니다."));
          return;
        case "AUTHENTICATION_FAILED":
          reject(new Error("다시 로그인해주세요."));
          return;
        case "ENTRY_NOT_FOUND":
          reject(new Error("해당 항목 조회에 실패했습니다."));
          return;
        case "CAPSULE_ALREADY_EXISTS":
          reject(new Error("이미 캡슐이 존재합니다."));
          return;
      }
      reject(new Error("알 수 없는 에러가 발생했습니다."));
    }
  });
};

export function initAxios() {
  // TODO: axios 요청에 있어서 공통적으로 처리해야하는 config 추가 설정
  // TODO: 서버에서 의도적으로 에러로 발생시켜 내려주는 경우 성공으로 처리하기
  // axios.defaults.validateStatus = (status: number) => status === 0;

  axios.interceptors.request.use(requestOnFullFilled);
  axios.interceptors.response.use(responseOnFullFilled, responseOnRejected);
}
