import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", pwd: "", pwd2: "" });
  const [err, setErr] = useState("");

  function onChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }

  function submit(e) {
    e.preventDefault();
    if (form.pwd !== form.pwd2) { setErr("Las contraseñas no coinciden"); return; }
    // Simulación de creación — redirige a login para completar el flujo
    nav("/login", { replace: true });
  }

  return (
    <div className="auth-page split alt">
      <div className="auth-right">
        <div className="auth-card">
          <h3>Crear cuenta</h3>
          <p className="muted">Únete a la comunidad de StudentOverflow</p>
          <form onSubmit={submit}>
            <label>Nombre completo
              <input name="name" value={form.name} onChange={onChange} placeholder="Tu nombre completo" required/>
            </label>
            <label>Correo electrónico
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="tu@email.com" required/>
            </label>
            <label>Contraseña
              <input name="pwd" type="password" value={form.pwd} onChange={onChange} placeholder="Mínimo 8 caracteres" required/>
            </label>
            <label>Confirmar contraseña
              <input name="pwd2" type="password" value={form.pwd2} onChange={onChange} placeholder="Confirma tu contraseña" required/>
            </label>
            {err && <div className="error">{err}</div>}

            <label className="checkbox"><input type="checkbox" required/> Acepto los términos de servicio y la política de privacidad</label>

            <button className="btn primary full" type="submit">Crear cuenta</button>
          </form>

          <div className="divider"><span>O regístrate con</span></div>
          <button className="btn outline full" type="button">Registrarse con Google</button>

          <div className="small">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </div>
        </div>
      </div>

      <div className="auth-left">
        <div className="hero-ill-card">
          <img src="/assets/hero-illustration.svg" alt="Ilustración grupo" />
        </div>
        <h2>Comienza tu viaje</h2>
        <p>Haz preguntas, comparte conocimiento y conecta con estudiantes de todo el mundo.</p>
      </div>
    </div>
  );
}