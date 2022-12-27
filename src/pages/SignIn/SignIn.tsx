import { signIn } from "api/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInView from "./SignIn.view";

export type SignInForm = {
  nickname: string;
  password: string;
};
const SignIn = () => {
  const navigate = useNavigate();

  const [isError, setError] = useState(false);

  const clickSubmit = (data: SignInForm) => {
    signIn(data)
      .then(() => {
        navigate(`/main/sea`);
      })
      .catch((error) => {
        alert(error.message);
        setError(true);
      });
  };

  return <SignInView isError={isError} clickSubmit={clickSubmit} />;
};

export default SignIn;
