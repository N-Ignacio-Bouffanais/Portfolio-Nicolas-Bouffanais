"use client";
import Link from "next/link";
//import { useRef } from 'react';

export default function Menu() {
  //const ref = useRef(null);
  const handleClick = (event) => {
    event.currentTarget.classList.toggle("active");
    const el = document.getElementById('nav-menu');
    el.classList.toggle("active");
  };
  return (
    <div>
      <ol className="nav-menu" /*ref={ref}*/ id="nav-menu">
        <li className="nav-item">
          <Link
            className="nav-link"
            href="#primera_section"
            title="Ir a la section de Acerca de mi"
          >
            About me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            href="#segunda_section"
            title="Ir a la section de Proyectos"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="nav-button"
            href="../public/resume.pdf"
            title="Descargar Curriculum Vitae"
            target="_blank"
          >
            Resume
          </Link>
        </li>
      </ol>
      <div className="hamburguer" onClick={handleClick}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </div>
  );
}
