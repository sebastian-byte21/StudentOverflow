import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function TopNav({ variant }) {
  const { isAuth, user, logout } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();
  const isLanding = variant === "landing";

  return (
    <header className="topnav">
      <div className="nav-left">
        <Link to="/" className="brand"><img src="/assets/logo-so.svg" alt="SO" /><span>StudentOverflow</span></Link>
      </div>
      <div className="nav-center">
        <nav className="main-nav">
          <Link to="/" className={loc.pathname === "/" ? "active" : ""}>Preguntas</Link>
          <a className="muted-link" onClick={() => nav(isAuth ? "/feed" : "/login", { state: { from: { pathname: "/feed" } } })}>Etiquetas</a>
          <a className="muted-link" onClick={() => nav(isAuth ? "/feed" : "/login", { state: { from: { pathname: "/feed" } } })}>Usuarios</a>
        </nav>
        {!isLanding && (
          <input className="search" placeholder="Buscar preguntas, etiquetas o usuarios" />
        )}
      </div>
      <div className="nav-right">
        {isAuth ? (
          <>
            <div className="avatar" title={user?.email}>
              {user?.name?.[0]?.toUpperCase() || "U"}
            </div>
            <button className="btn small outline" onClick={() => { logout(); nav("/"); }}>
              Salir
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn small outline">Iniciar sesión</Link>
            <Link to="/register" className="btn small primary">Registrarse</Link>
          </>
        )}
      </div>
    </header>
  );
}