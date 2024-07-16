import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ENDPOINT } from "../utils/constants";

export const UserContext = createContext();

const initialStateToken = localStorage.getItem("token") || null;

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const [usuario, setUsuario] = useState(null)

  const navigate = useNavigate()
  
  const getDataUsuario = async (token) => {
    const response = await fetch(`${ENDPOINT.usuarios}/get`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })

    const [data] = await response.json()
    setUsuario(data)
  }

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      getDataUsuario(token)
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const loginWithEmailAndPassword = async (email, password) => {
    const response = await fetch(ENDPOINT.login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setToken(data.token || null);

    return data;
  };

  const registerWithEmailAndPassword = async (nombre, email, password) => {
    const response = await fetch(`${ENDPOINT.usuarios}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });
    const data = await response.json();
    return data;
  };

  const logout = () => {
    setToken(null);
    setUsuario(null)
    navigate('/')
  };
  
  return (
    <UserContext.Provider
      value={{
        loginWithEmailAndPassword,
        registerWithEmailAndPassword,
        usuario,
        token,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
