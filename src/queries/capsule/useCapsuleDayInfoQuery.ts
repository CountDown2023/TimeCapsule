import { getCapsuleDayInfo, GetCapsuleDayInfoResponse } from "api/capsule";
import { useQuery, UseQueryOptions } from "react-query";

type Props = {
  capsuleId: number;
};

const useCapsuleDayInfoQuery = (
  { capsuleId }: Props,
  options?: UseQueryOptions<GetCapsuleDayInfoResponse>
) => {
  const response = useQuery<GetCapsuleDayInfoResponse>(
    ["getCapsuleDayInfo", capsuleId],
    () => getCapsuleDayInfo({ capsuleId }),
    {
      ...options,
    }
  );

  return response;
};

export default useCapsuleDayInfoQuery;
