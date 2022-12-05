import { getCapsuleInfo, GetCapsuleInfoResponse } from "../../api/capsule";
import { useQuery, UseQueryOptions } from "react-query";

const useCapsuleInfoQuery = (
  options?: UseQueryOptions<GetCapsuleInfoResponse>
) => {
  const response = useQuery<GetCapsuleInfoResponse>(
    "getCapsuleInfo",
    () => getCapsuleInfo(),
    {
      ...options,
    }
  );

  return response;
};

export default useCapsuleInfoQuery;
