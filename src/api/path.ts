const BASE_URL = "/api";

export const CapsuleApiUrls = {
  getCapsuleInfo: () => `${BASE_URL}/capsule/my`,
  getCapsuleDayInfo: (capsuleId: number) =>
    `${BASE_URL}/capsule/${capsuleId}/days`,
  hasUnknownCapsule: () => `${BASE_URL}/`,
  postCapsule: () => `${BASE_URL}/capsule`,
};

export const UserApiUrls = {
    signin: () => `${BASE_URL}/member/login`,
    getRefreshToken: () => `${BASE_URL}/member/refresh-access-token`,
    signUp: () => `${BASE_URL}/member/sign-up`
};

export const PasswordApiUrls = {
    findPassword: () => `${BASE_URL}/`,
    passwordConfirm: () => `${BASE_URL}/`,
    newPassword: () => `${BASE_URL}/`,
};
