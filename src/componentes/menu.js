import React, { useState } from "react";
import andrea from "../images/andrea.jpg";
import Modal from "react-modal";
import "../css/menu.css";

Modal.setAppElement("#root");

function Menu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  const openAboutModal = (e) => {
    e.preventDefault(); // Evita la acción predeterminada de navegación
    setAboutModalOpen(true);
  };

  const closeAboutModal = () => {
    setAboutModalOpen(false);
  };
  const scrollToServicios = () => {
    const serviciosSection = document.getElementById("Servicios");

    if (serviciosSection) {
      serviciosSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu(); // Cierra el menú al hacer clic en un elemento
  };

  return (
    <div>
      <button className="menu-button" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <nav className={`nav__menu container ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className={`nav__ul ${isMobileMenuOpen ? "open" : ""}`}>
          <li className={`nav__li ${isMobileMenuOpen ? "hidden-mobile" : ""}`}>
            <a
              className="a-menu"
              icon="./images/logo.png"
              href="/"
              onClick={closeMobileMenu}
            >
              Inicio
            </a>
          </li>
          <li className={`nav__li ${isMobileMenuOpen ? "hidden-mobile" : ""}`}>
            <a className="a-menu " href="/" onClick={openAboutModal}>
              Mi Perfil
            </a>
            <Modal
              isOpen={isAboutModalOpen}
              onRequestClose={closeAboutModal}
              contentLabel="Modal Acerca de"
              className=" modal-background"
              overlayClassName="modal-content"
            >
              <h2 className="modal__title">Mi Perfil</h2>
              <img
                src={andrea}
                alt="Imagen de Acerca de"
                className="modal__imagen"
              />

              <p className="modal__tex">
                Psicóloga con estudios en atención en salud mental, amplia
                experiencia en intervención y acompañamiento a niños,
                adolescentes y adultos. A través de un enfoque cognitivo
                conductual, busco proporcionarte herramientas para el
                fortalecimiento de tus recursos personales y habilidades de
                enfrentamiento ante situaciones difíciles, potenciando el
                desarrollo de capacidades como adaptación al cambio, relaciones
                interpersonales y pautas de autocuidado que te ayudarán a
                mejorar tu salud mental y emocional.
              </p>
              <button className="modal-close-button" onClick={closeAboutModal}>
                Cerrar
              </button>
            </Modal>
          </li>
          <li className={`nav__li ${isMobileMenuOpen ? "hidden-mobile" : ""}`}>
            <a className="a-menu" href="#Servicios" onClick={scrollToServicios}>
              Servicios
            </a>
          </li>
          <li className={`nav__li ${isMobileMenuOpen ? "hidden-mobile" : ""}`}>
            <a className="a-menu" href="/contacto" onClick={closeMobileMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
