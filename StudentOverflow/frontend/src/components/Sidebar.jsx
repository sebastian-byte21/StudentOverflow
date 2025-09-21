import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="side-nav">
        <ul>
          <li className="active">Inicio</li>
          <li>Preguntas</li>
          <li>Etiquetas</li>
          <li>Usuarios</li>
        </ul>
      </nav>

      <div className="side-section">
        <h5>Mis etiquetas</h5>
        <div className="tag-list">
          <span className="tag pill">javascript <small>24</small></span>
          <span className="tag pill">python <small>18</small></span>
          <span className="tag pill">matemáticas <small>12</small></span>
        </div>
      </div>
    </aside>
  );
}