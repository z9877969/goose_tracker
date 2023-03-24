import { AuthForm, AuthFormWrapper, AuthWrapper } from "modules/authPages";
import {
  registerFormInitialValues,
  registerFormOptions,
} from "modules/authPages/options";

const RegisterPage = () => {
  const handleUserRegister = (userData) => {
    console.log("userData :>> ", userData);
  };

  return (
    <AuthWrapper>
      <AuthFormWrapper linkTitle={"SigLog In"} redirectTo="/login">
        <AuthForm
          options={registerFormOptions}
          formTitle={"Log in"}
          initialValues={registerFormInitialValues}
          onSubmit={handleUserRegister}
        />
      </AuthFormWrapper>
    </AuthWrapper>
  );
};

export default RegisterPage;
