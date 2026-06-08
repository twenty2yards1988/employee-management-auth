import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  const login = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    setToken(accessToken);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};