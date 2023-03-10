import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'reactstrap';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button size="sm" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;