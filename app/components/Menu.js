"use client";
import Link from "next/link";

export default function Menu() {
  const handleClick = (event) => {
    event.currentTarget.classList.toggle("active");
    const el = document.getElementById('nav-menu');
    el.classList.toggle("active");
    const hamburger = document.querySelector(".hamburger")
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active")
      el.classList.remove("active")
    }))
  };
  return (
    <>
      <ol className="nav-menu" id="nav-menu">
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
      <div className="hamburguer"  id="hamburguer" onClick={handleClick}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </>
  );
}
