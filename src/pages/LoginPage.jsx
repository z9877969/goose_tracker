import {
  loginFormInitialValues,
  loginFormOptions,
} from "modules/authPages/options";
import { AuthForm, AuthWrapper, AuthFormWrapper } from "../modules/authPages";

const LoginPage = () => {
  const handleUserLogin = (userData) => {
    console.log("userData :>> ", userData);
  };

  return (
    <AuthWrapper>
      <AuthFormWrapper linkTitle={"Sign up"} redirectTo="/register">
        <AuthForm
          options={loginFormOptions}
          formTitle={"Log in"}
          initialValues={loginFormInitialValues}
          onSubmit={handleUserLogin}
        />
      </AuthFormWrapper>
    </AuthWrapper>
  );
};

export default LoginPage;
