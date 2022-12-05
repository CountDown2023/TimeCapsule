import {
  hasUnknownCapsule,
  HasUnknownCapsuleResponse,
} from "../../api/capsule";
import { useQuery, UseQueryOptions } from "react-query";

const useUnknownCapsuleQuery = (
  options?: UseQueryOptions<HasUnknownCapsuleResponse>
) => {
  const response = useQuery<HasUnknownCapsuleResponse>(
    "hasUnknownCapsule",
    () => hasUnknownCapsule(),
    {
      ...options,
    }
  );

  return response;
};

export default useUnknownCapsuleQuery;
