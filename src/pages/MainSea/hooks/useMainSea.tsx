import useCapsuleInfoQuery from "../../../queries/capsule/useCapsuleInfoQuery";
import useUnknownCapsuleQuery from "../../../queries/capsule/useUnknownCapsuleQuery";

const useMainSea = () => {
  const {
    isLoading: isUnknownCapsuleLoading,
    data: unknownCapsule,
    isError: isUnknownCapsuleError,
  } = useUnknownCapsuleQuery();

  const {
    isLoading: isCapsuleLoading,
    data: capsule,
    isError: isCapsuleError,
  } = useCapsuleInfoQuery();

  return {
    isLoading: isUnknownCapsuleLoading || isCapsuleLoading,
    isError: isUnknownCapsuleError || isCapsuleError,
    unknownCapsule,
    hasCapsule: capsule ? true : false,
  };
};

export default useMainSea;
