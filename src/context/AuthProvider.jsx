import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  const nevigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setAuth(true);
    }
  }, [token]);


  const login = (token) => {
    localStorage.setItem("token", token);
    setAuth(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    nevigate("/signin");
  };

  return (
    <AuthContext.Provider
      value={{ auth, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
