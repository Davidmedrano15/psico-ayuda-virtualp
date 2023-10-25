import React from "react";
import "../css/nuestro-trabajo.css";

function Servicios() {
  return (
    <div id="Servicios" className="servi container">
      {/* Contenido de la sección de Servicios */}
      <h2 className="servi__title">
        ¿Por qué <br />
        iniciar tu <br />
        proceso de <br />
        forma online
        <br /> con Psicología
        <br /> Ayuda Virtual?
      </h2>
      <div id="animacionSeccion">
        <ul className="servi__conteiner">
          <li>
            <h3 className="servi__t">Privacidad</h3>
            <p className="servi-p">
              Contamos con la experiencia que guardarán la confidencialidad de{" "}
              <br />
              la información, además iremos a tu tiempo, si requieres tener la{" "}
              <br />
              cámara apagada mientras tomas algo de confianza, es válido.
            </p>
          </li>
          <br />
          <li>
            <h3 className="servi__t">Comodidad</h3>
            <p className="servi-p">
              Reside tu atención psicológica en línea, en cualquier lugar y
              <br />
              cuando lo desees.
            </p>
          </li>
          <br />
          <li>
            <h3 className="servi__t">Ahorro</h3>
            <p className="servi-p">
              Ahorro de tiempo, ya que no necesitarás desplazarte, evitar el
              <br />
              tráfico, mal clima, por ello ahorras tiempo y dinero que en una
              <br />
              cita presencial.
            </p>
          </li>
          <br />
          <li>
            <h3 className="servi__t">Comprensión</h3>
            <p className="servi-p">
              Sabemos que estar lejos de tu país es difícil pues te enfrentas a
              <br />
              una cultura y rituales desconocidos, por ello es fundamental tener
              <br />
              un profesional que es de tu misma región, ello garantiza conocer
              <br />
              tu cultura, y los ritos que cada uno de ellos tienen.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Servicios;
