const BASE_URL = "/api";

export const CapsuleApiUrls = {
  getCapsuleInfo: () => `${BASE_URL}/capsule/my`,
  getCapsuleDayInfo: (capsuleId: number) =>
    `${BASE_URL}/capsule/${capsuleId}/days`,
  hasUnknownCapsule: () => `${BASE_URL}/`,
  postCapsule: () => `${BASE_URL}/capsule`,
};
