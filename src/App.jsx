import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <div>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;