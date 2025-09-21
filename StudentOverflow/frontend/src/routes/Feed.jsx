import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";

const seedPosts = [
  { id:1, title:"¿Cómo optimizar consultas SQL complejas?", excerpt:"Tengo una consulta que tarda mucho en ejecutarse. Involucra múltiples JOINs y subconsultas...", votes:24, tags:["sql","base-de-datos","optimización"] },
  { id:2, title:"Diferencia entre let, const y var en JavaScript", excerpt:"¿Alguien puede explicar las diferencias principales y cuándo usar cada una?", votes:18, tags:["javascript","variables"] }
];

export default function Feed() {
  const nav = useNavigate();
  const { isAuth } = useAuth();
  const [posts, setPosts] = useState(seedPosts);

  function goAsk(){
    if(!isAuth) return nav("/login", { state: { from: { pathname: "/ask" } } });
    nav("/ask");
  }

  function openQuestion(id){
    nav(`/q/${id}`);
  }

  function vote(id, delta){
    if(!isAuth){
      return nav("/login", { state: { from: { pathname: "/feed" } } });
    }
    setPosts(prev => prev.map(p => p.id === id ? { ...p, votes: p.votes + delta } : p));
  }
  return (
    <div className="page feed">
      <TopNav />
      <div className="layout">
        <Sidebar />
        <main className="feed-main">
          <div className="welcome">
            <h2>¡Hola, María!</h2>
            <p className="muted">Bienvenida de vuelta. Aquí tienes las preguntas más recientes de tu feed personalizado.</p>
          </div>

          <div className="tabs">
            <button className="tab active">Todas</button>
            <button className="tab">Mis etiquetas</button>
            <button className="tab">Sin responder</button>
            <div className="spacer" />
            <div className="sort">Más recientes ▾</div>
          </div>

          <div className="feed-list">
            {posts.map(p => (
              <article className="post-card" key={p.id}>
                <div className="post-left" style={{display:"flex", flexDirection:"column", alignItems:"center", gap:6}}>
                  <button className="btn small outline" title="Votar arriba" onClick={() => vote(p.id, +1)}>▲</button>
                  <div className="vote" aria-live="polite">{p.votes}</div>
                  <button className="btn small outline" title="Votar abajo" onClick={() => vote(p.id, -1)}>▼</button>
                </div>
                <div className="post-body">
                  <h4 style={{cursor:"pointer"}} onClick={() => openQuestion(p.id)}>{p.title}</h4>
                  <p className="excerpt">{p.excerpt}</p>
                  <div className="qtags">
                    {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button className="fab" title="Nueva pregunta" onClick={goAsk}>+</button>
        </main>
      </div>
    </div>
  );
}