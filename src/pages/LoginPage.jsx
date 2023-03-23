import { AuthForm, AuthWrapper, FormGroup } from "../modules/authPages";

const options = [
  {
    name: "email",
    placeholder: "Enter email",
    label: "Email",
  },
  {
    name: "password",
    placeholder: "Enter password",
    label: "Password",
    type: "password",
  },
];

const LoginPage = () => {
  return (
    <AuthWrapper>
      <FormGroup linkTitle={"Sign up"} redirectTo="/register">
        <AuthForm options={options} formTitle={"Log in"} />
      </FormGroup>
    </AuthWrapper>
  );
};

export default LoginPage;
