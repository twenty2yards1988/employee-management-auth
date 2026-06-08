import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { loginUser } from "../api/authApi";
import { useAuth } from "../auth/useAuth";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      login(data.accessToken);

      navigate("/dashboard");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      username,
      password,
    });
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br />
        <br />

        <button
          type="submit"
          disabled={mutation.isPending}
        >
          {mutation.isPending
            ? "Logging In..."
            : "Login"}
        </button>

        {mutation.isError && (
          <p>Login Failed</p>
        )}
      </form>
    </div>
  );
};

export default Login;