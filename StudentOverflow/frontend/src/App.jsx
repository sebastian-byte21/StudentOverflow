import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Feed from "./routes/Feed";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Ask from "./routes/Ask";
import Question from "./routes/Question";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ask"
          element={
            <ProtectedRoute>
              <Ask />
            </ProtectedRoute>
          }
        />
        <Route path="/q/:id" element={<Question />} />
      </Routes>
    </AuthProvider>
  );
}