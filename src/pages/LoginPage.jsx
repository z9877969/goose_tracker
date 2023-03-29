import {
  loginFormInitialValues,
  loginFormOptions,
} from "modules/authPages/options";
import { useDispatch } from "react-redux";
import { loginUser } from "redux/auth/authOperations";
import { AuthForm, AuthWrapper, AuthFormWrapper } from "../modules/authPages";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleUserLogin = (userData) => {
    dispatch(loginUser(userData));
  };

  return (
    <AuthWrapper>
      <AuthFormWrapper linkTitle={"Sign up"} redirectTo="/register">
        <AuthForm
          options={loginFormOptions}
          formTitle={"Log in"}
          initialValues={loginFormInitialValues}
          onSubmit={handleUserLogin}
          submitBtnTitle="Log in"
        />
      </AuthFormWrapper>
    </AuthWrapper>
  );
};

export default LoginPage;
