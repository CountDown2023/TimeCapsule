import useCapsuleDayInfoQuery from "../../../queries/capsule/useCapsuleDayInfoQuery";
import useCapsuleInfoQuery from "../../../queries/capsule/useCapsuleInfoQuery";

const useMainMap = () => {
  const {
    isLoading: isCapsuleLoading,
    data: capsule,
    isError: isCapsuleError,
  } = useCapsuleInfoQuery();

  const {
    isLoading: isCapsuleDayLoading,
    data: capsuleDay,
    isError: isCapsuleDayError,
  } = useCapsuleDayInfoQuery(
    { capsuleId: capsule ? capsule[0].capsule_id : 0 },
    {
      enabled: !!capsule,
    }
  );

  return {
    isLoading: isCapsuleDayLoading || isCapsuleLoading,
    isError: isCapsuleDayError || isCapsuleError,
    days: capsuleDay?.days,
  };
};

export default useMainMap;
