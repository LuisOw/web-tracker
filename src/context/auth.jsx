import React, { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { httpFetchWithBody } from "../services/Services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredToken = localStorage.getItem("@login:token");

    if (recoveredToken) {
      setToken(recoveredToken);
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    (async () => {
      const response = await httpFetchWithBody(
        "token",
        "POST",
        `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`,
        { "Content-Type": "application/x-www-form-urlencoded" }
      );
      let token = response["access_token"];
      localStorage.setItem("@login:token", token);
      setToken(token);
      navigate("/pesquisas");
    })();
  };

  const signin = (username, password, name) => {
    (async () => {
      const response = await httpFetchWithBody(
        "create",
        "POST",
        { username, password, name },
        {
          "Content-Type": "application/json",
        }
      );
      let token = response["access_token"];
      localStorage.setItem("@login:token", token);
      setToken(token);
      navigate("/pesquisas");
    })();
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("@login:token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!token, token, loading, signin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
