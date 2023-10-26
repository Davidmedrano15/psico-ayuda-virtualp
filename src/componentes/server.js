const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura el transporte de nodemailer con tus credenciales
const transporter = nodemailer.createTransport({
  service: 'Gmail', // o el servicio de correo que prefieras
  auth: {
    user: 'davidmedranoh5gmail.com',
    pass: 'Miramira15',
  },
});

app.post('/enviar-correo', (req, res) => {
  const { fecha, hora, paciente, email, telefono } = req.body;

  const mensaje = `
    Fecha: ${fecha}
    Hora: ${hora}
    Paciente: ${paciente}
    Correo Electrónico: ${email}
    Teléfono: ${telefono}
  `;

  const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: 'davidmedranoh5@gmail.com', // Tu dirección de correo
    subject: 'Nueva cita programada',
    text: mensaje,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado con éxito:', info.response);
      res.status(200).send('Correo enviado con éxito');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
