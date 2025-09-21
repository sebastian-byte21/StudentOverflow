import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import { useAuth } from "../auth/AuthContext";

export default function Question() {
  const { id } = useParams();
  const { isAuth } = useAuth();
  const nav = useNavigate();
  const [votes, setVotes] = useState(10);

  function requireAuth(action){
    if(!isAuth){
      nav("/login", { state: { from: { pathname: `/q/${id}` } } });
      return false;
    }
    return true;
  }

  return (
    <div className="page question">
      <TopNav />
      <main className="container">
        <article className="card">
          <div className="qheader">
            <h2>Pregunta #{id}</h2>
            <div className="qmeta muted">hace 3 horas · 2 respuestas</div>
          </div>
          <div className="qvote">
            <button className="btn small outline" onClick={() => requireAuth("vote") && setVotes(v=>v+1)}>▲</button>
            <div className="vote-num">{votes}</div>
            <button className="btn small outline" onClick={() => requireAuth("vote") && setVotes(v=>v-1)}>▼</button>
          </div>
          <p>
            Este es el detalle de la pregunta (demo). Aquí se mostraría el contenido
            completo y cualquier código relevante.
          </p>
          <div className="qtags"><span className="tag">demo</span></div>
          <div className="actions">
            <button className="btn primary" onClick={() => requireAuth("answer") && alert("Respuesta enviada (demo)")}>Responder</button>
          </div>
        </article>
      </main>
    </div>
  );
}
