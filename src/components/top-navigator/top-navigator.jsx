import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export function TopNavigator({ isAuth, user, onLogout }) {
  const navigate = useNavigate();
  if (user && isAuth) {
    return (
      <div>
        <Button
          className="m-3"
          variant="danger"
          type="submit"
          // clears localStorage/user/token
          onClick={() => {
            onLogout();
            navigate("/auth");
          }}
        >
          Log Out!
        </Button>
      </div>
    );
  }
  return null;
}
