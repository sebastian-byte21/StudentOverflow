import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  const loc = useLocation();
  if (!isAuth) return <Navigate to="/login" replace state={{ from: loc }} />;
  return children;
}

