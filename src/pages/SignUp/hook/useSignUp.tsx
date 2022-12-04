import { SignUpBody } from "api/user";
import { HTTP_STATUS } from "configs/axios";
import useSignUpQuery from "queries/user/useSignUpQuery";

const useSignUp = (data: SignUpBody) => {
  const {
    isLoading: isSignUpLoading,
    data: signUp,
    isError: isSignUpError,
    mutate
  } = useSignUpQuery(data);

  return {
    isLoading: isSignUpLoading,
    data: signUp,
    isError: isSignUpError,
    mutate,
    //TODO: isJoined 어케 판단할지 수정 필요
    isJoined: signUp?.code === HTTP_STATUS.BAD_REQUEST ? false : true
  };
};

export default useSignUp;
