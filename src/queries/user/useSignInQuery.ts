import { signIn, SignInBody, SignInResponse } from "api/user";
import { useMutation, UseMutationOptions } from "react-query";

// const useSignInQuery = (
//   data: SignInBody,
//   options?: UseMutationOptions<SignInResponse>
//   ) => {
//     console.log("useSignInQuery : ", data.nickname, ", ", data.password)
//     const response = useMutation<SignInResponse>(
//       "signIn",
//       () => signIn(data),
//       {
//         ...options
//       });

//     console.log("signIn res : ", response);
    
//     return response;
//   }

// export default useSignInQuery;
