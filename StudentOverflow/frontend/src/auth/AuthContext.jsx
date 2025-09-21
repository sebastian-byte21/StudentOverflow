import React, { createContext, useContext, useEffect, useState } from "react";

const AuthCtx = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("so_user");
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("so_user", JSON.stringify(user));
    else localStorage.removeItem("so_user");
  }, [user]);

  const login = (email) => setUser({ email, name: email.split("@")[0] || "Usuario" });
  const logout = () => setUser(null);

  return (
    <AuthCtx.Provider value={{ user, isAuth: !!user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
export function useAuth() { return useContext(AuthCtx); }