import { SignUpBody } from "api/user";
import useSignUpQuery from "queries/user/useSignUpQuery";

const useSignUp = (data: SignUpBody) => {
  const {
    isLoading: isSignUpLoading,
    data: signUp,
    isError: isSignUpError,
    mutate,
  } = useSignUpQuery(data);

  return {
    isLoading: isSignUpLoading,
    data: signUp,
    isError: isSignUpError,
    mutate,
  };
};

export default useSignUp;
