import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialStateToken = localStorage.getItem("token") || null;

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const loginWithEmailAndPassword = async (email, password) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setToken(data.token || null);

    return data;
  };

  const registerWithEmailAndPassword = async (nombre, email, password) => {
    const response = await fetch(`${BASE_URL}/usuarios/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });
    const data = await response.json();
    console.log('DATA:',data)
    return data;
  };

  const logout = () => {
    setToken(null);
  };
  
  return (
    <UserContext.Provider
      value={{
        loginWithEmailAndPassword,
        registerWithEmailAndPassword,
        token,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
