import { AccountPageWrapper } from "modules/accountPage";
import { UserForm } from "modules/accountPage";
import { Container } from "shared/components";

const AccountPage = () => {
  return (
    <Container>
      <AccountPageWrapper>
        <UserForm />
      </AccountPageWrapper>
    </Container>
  );
};

export default AccountPage;
