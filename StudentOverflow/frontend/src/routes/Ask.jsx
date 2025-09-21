import React, { useState } from "react";
import TopNav from "../components/TopNav";

export default function Ask() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    alert("Pregunta enviada (demo). Requiere backend para persistir.");
  }

  return (
    <div className="page ask">
      <TopNav />
      <main className="container">
        <h2>Hacer una pregunta</h2>
        <form className="card" onSubmit={handleSubmit}>
          <label>Título
            <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Resume tu problema" required />
          </label>
          <label>Descripción
            <textarea rows={8} value={body} onChange={e=>setBody(e.target.value)} placeholder="Incluye lo que intentaste y detalles relevantes" required />
          </label>
          <label>Etiquetas
            <input value={tags} onChange={e=>setTags(e.target.value)} placeholder="ej. javascript, arrays" />
          </label>
          <div>
            <button className="btn primary" type="submit">Publicar pregunta</button>
          </div>
        </form>
      </main>
    </div>
  );
}
