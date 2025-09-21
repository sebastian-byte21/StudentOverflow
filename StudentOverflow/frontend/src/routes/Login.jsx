import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const nav = useNavigate();
  const loc = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  function handleSubmit(e) {
    e?.preventDefault();
    login(email);
    const to = loc.state?.from?.pathname || "/feed";
    nav(to, { replace: true });
  }

  return (
    <div className="auth-page split">
      <div className="auth-left">
        <div className="auth-ill">
          <img src="/assets/auth-left-illustration.svg" alt="Ilustración" />
        </div>
        <h2>Únete a StudentOverflow</h2>
        <p className="muted">La comunidad donde estudiantes y profesores resuelven dudas académicas juntos.</p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h3>Iniciar sesión</h3>
          <p className="muted">Accede a tu cuenta para continuar</p>
          <form onSubmit={handleSubmit}>
            <label>Correo electrónico
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@email.com" required/>
            </label>

            <label>Contraseña
              <input type="password" value={pwd} onChange={e=>setPwd(e.target.value)} placeholder="Tu contraseña" required/>
            </label>

            <div className="form-row">
              <label className="checkbox"><input type="checkbox" /> Recordarme</label>
              <a className="link">¿Olvidaste tu contraseña?</a>
            </div>

            <button className="btn primary full" type="submit">Iniciar sesión</button>
          </form>

          <div className="divider"><span>O continúa con</span></div>
          <button className="btn outline full" type="button">Iniciar sesión con Google</button>

          <div className="small">
            ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}