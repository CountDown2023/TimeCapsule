import axiosInstance from "."
import { CapsuleApiUrls } from "./path";

export const getCapsuleInfo = () => {
    return axiosInstance.get(CapsuleApiUrls.getCapsuleInfo());
}

export const hasCapsule = () => {
    return axiosInstance.get(CapsuleApiUrls.hasCapsule());
}

export const hasUnknownCapsule = () => {
    return axiosInstance.get(CapsuleApiUrls.hasUnknownCapsule());
}