import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [headerText, setHeaderText] = useState([]);
  const [token, setToken] = useState(null);

  const initUser = async (data) => {
    setUser(data.user);
    setToken(data.auth);
    runLogoutTimer(data.auth.expiryInSeconds * 1000);
    data.auth.expiryDate =
      new Date().getTime() + data.auth.expiryInSeconds * 1000;
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...data,
      })
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  function runLogoutTimer(time) {
    setTimeout(() => {
      logout();
    }, time);
  }

  return (
    <AuthContext.Provider
      value={{ user, initUser, logout, headerText, setHeaderText }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
