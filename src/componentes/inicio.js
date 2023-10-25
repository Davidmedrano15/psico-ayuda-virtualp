import React from "react";
import "../css/inicio.css";
import woman from "../images/1.png";
import arbol from "../images/arbol.png";

function Inicio() {
  return (
    <div className="inicio container">
      <img src={woman} className="psi__woman" alt="Logo De psicologia" />
      <img src={arbol} className="psi__arbol" alt="Logo De psicologia" />
      <p className="inicio__text">
        Soy Especialista en Salud Mental con experiencia en evaluación, <br />.
        atención e intervención individual en niños, niñas, adolescentes y
        adultos. <br />. Para el manejo de la Depresión y Ansiedad.
      </p>
    </div>
  );
}

export default Inicio;
