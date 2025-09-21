import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import { useAuth } from "../auth/AuthContext";

export default function Landing() {
  const nav = useNavigate();
  const { isAuth } = useAuth();
  useEffect(() => {
    if (isAuth) nav("/feed", { replace: true });
  }, [isAuth, nav]);
  const mock = [
    { id: 1, title: "¿Cómo resolver integrales por partes?", votes: 24, tags: ["cálculo","integrales"] },
    { id: 2, title: "Error en Python: list index out of range", votes: 18, tags: ["python","errores"] }
  ];

  return (
    <div className="page landing">
      <TopNav variant="landing" />
      <header className="hero">
        <div className="hero-inner">
          <h1>Encuentra respuestas a tus dudas académicas</h1>
          <p>Únete a la comunidad de estudiantes y profesores. Pregunta, responde y aprende juntos.</p>
          <div className="hero-cta">
            <button
              className="btn primary"
              onClick={() => isAuth ? nav("/ask") : nav("/login", { state: { from: { pathname: "/ask" } } })}
            >
              Hacer una pregunta
            </button>
            <button
              className="btn outline"
              onClick={() => isAuth ? nav("/feed") : nav("/login", { state: { from: { pathname: "/feed" } } })}
            >
              Explorar preguntas
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="recent">
          <div className="section-head">
            <h3>Preguntas recientes</h3>
            <div className="sort">Más recientes ▾</div>
          </div>
          <div className="question-list">
            {mock.map(q => (
              <article className="qcard" key={q.id} onClick={() => nav(`/q/${q.id}`)} style={{cursor:"pointer"}}>
                <div className="qvotes">
                  <div className="num">{q.votes}</div>
                </div>
                <div className="qbody">
                  <h4>{q.title}</h4>
                  <div className="qtags">
                    {q.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <strong>StudentOverflow</strong>
            <p className="muted">La comunidad de preguntas y respuestas para estudiantes.</p>
          </div>
          <div>
            <strong>Comunidad</strong>
            <div className="foot-links">Preguntas<br/>Etiquetas<br/>Usuarios</div>
          </div>
          <div>
            <strong>Ayuda</strong>
            <div className="foot-links">Centro de ayuda<br/>Guías</div>
          </div>
          <div>
            <strong>Legal</strong>
            <div className="foot-links">Privacidad<br/>Términos</div>
          </div>
        </div>
      </footer>
    </div>
  );
}