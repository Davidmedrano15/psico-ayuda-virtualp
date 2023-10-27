import React, { useState } from 'react';
import '../css/citas.css'; // Importa tu archivo CSS
import psi from '../images/header_psicologia1.jpg';

const Citas = () => {
 
  const [citas, setCitas] = useState([]);
  const [nuevaCita, setNuevaCita] = useState({
    fecha: '',
    hora: '',
    paciente: '',
    email: '',
    telefono: '',
  });

  const agregarCita = () => {
    // Lógica para agregar una cita a la lista de citas
    // Puedes validar los campos, realizar una solicitud de recordatorio, etc.
    setCitas([...citas, nuevaCita]);
    setNuevaCita({
      fecha: '',
      hora: '',
      paciente: '',
      email: '',
      telefono: '',
    });
    const data = {
      fecha: nuevaCita.fecha,
      hora: nuevaCita.hora,
      paciente: nuevaCita.paciente,
      email: nuevaCita.email,
      telefono: nuevaCita.telefono,
    };
    // Realiza una solicitud al servidor para enviar el correo
    fetch('/enviar-correo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.status === 200) {
        console.log('Correo enviado con éxito');
      } else {
        console.error('Error al enviar el correo');
      }
    });
  };

  const enviarRecordatorio = cita => {
    // Lógica para enviar un recordatorio por correo y SMS
    // Puedes utilizar servicios externos para enviar correos y SMS, como SendGrid o Twilio
    console.log(
      `Recordatorio enviado para ${cita.paciente} el ${cita.fecha} a las ${cita.hora}`
    );
  };

  return (
    <div className="from-container ">
      <h1 className="from-title">Programación de Citas Médicas</h1>
      <div className="from-ocupa">
        <img src={psi} className="from-image" alt="Logo De psicologia" />
      </div>
      <div>
        <div className="form-fondo ">
          <div className="form-group">
            <label className="form-label">Fecha:</label>
            <input
              className="form-input"
              type="date"
              value={nuevaCita.fecha}
              onChange={e =>
                setNuevaCita({ ...nuevaCita, fecha: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">Hora:</label>
            <input
              className="form-input"
              type="time"
              value={nuevaCita.hora}
              onChange={e =>
                setNuevaCita({ ...nuevaCita, hora: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">Paciente:</label>
            <input
              className="form-input"
              type="text"
              value={nuevaCita.paciente}
              onChange={e =>
                setNuevaCita({ ...nuevaCita, paciente: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label className="form-label">Correo Electrónico:</label>
            <input
              className="form-input"
              type="email"
              value={nuevaCita.email}
              onChange={e =>
                setNuevaCita({ ...nuevaCita, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label className="form-label">Teléfono:</label>
            <input
              className="form-input"
              type="tel"
              value={nuevaCita.telefono}
              onChange={e =>
                setNuevaCita({ ...nuevaCita, telefono: e.target.value })
              }
            />
          </div>
          <button className="btn" onClick={agregarCita}>
            Programar Cita
          </button>
          <div className="citas-color ">
            <h3 className="citas-title">
              Es momento de cambiar tu vida. <br /> ¿Y si inicias hoy?
            </h3>
            <p className="citas-text">
              "Nuestro propósito superior es empoderar a las personas para vivir
              una vida plena, por medio de la aplicación de estrategias
              científicamente validadas, que les permitan alcanzar sus metas
              personales y profesionales."
            </p>
          </div>
        </div>
        <ul className="citas-list">
          {citas.map((cita, index) => (
            <li className="li-list" key={index}>
              {cita.paciente} - {cita.fecha} a las {cita.hora}
              <button
                className="recordatorio-btn"
                onClick={() => enviarRecordatorio(cita)}
              >
                Enviar Recordatorio
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Citas;
