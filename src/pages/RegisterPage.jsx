import { AuthForm, AuthFormWrapper, AuthWrapper } from "modules/authPages";
import {
  registerFormInitialValues,
  registerFormOptions,
} from "modules/authPages/options";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/authOperations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleUserRegister = (userData) => {
    console.log("userData :>> ", userData);
    dispatch(registerUser(userData));
  };

  return (
    <AuthWrapper>
      <AuthFormWrapper linkTitle={"Log in"} redirectTo="/login">
        <AuthForm
          options={registerFormOptions}
          formTitle={"Sign up"}
          initialValues={registerFormInitialValues}
          onSubmit={handleUserRegister}
          submitBtnTitle="Sign up"
        />
      </AuthFormWrapper>
    </AuthWrapper>
  );
};

export default RegisterPage;
