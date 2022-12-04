import { signUp, SignUpBody, SignUpResponse } from "api/user";
import { useMutation, UseMutationOptions } from "react-query";

const useSignUpQuery = (
  data: SignUpBody,
  options?: UseMutationOptions<SignUpResponse>
  ) => {
  const response = useMutation<SignUpResponse>(
    () => signUp(data),
    {
      ...options
    });
  return response;
}

export default useSignUpQuery;
