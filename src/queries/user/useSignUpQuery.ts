import { signUp, SignInRequestData, SignUpResponseData } from "api/user";
import { useMutation } from "react-query";

const useSignUpQuery = (data: SignInRequestData) => {
  const response = useMutation<SignUpResponseData>(() => signUp(data));
  return response;
}

export default useSignUpQuery;
