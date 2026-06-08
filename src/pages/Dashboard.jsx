import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard Page</h1>

      <p>Login Successful</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;