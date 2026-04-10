// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configuración del transporte de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // o el servicio de correo que uses (ej. Yahoo, Hotmail, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Tu correo electrónico
        pass: process.env.EMAIL_PASS, // Contraseña o App password
      },
    });

    try {
      // Opciones de envío del correo
      await transporter.sendMail({
        from: email, // Remitente
        to: 'darioreyea1804@gmail.com', // Dirección de correo donde recibirás los mensajes
        subject: `Nuevo mensaje de ${name}`,
        text: message,
        html: `<p>Has recibido un nuevo mensaje de ${name} (${email}):</p><p>${message}</p>`,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).json({ success: false, message: 'Error al enviar el correo' });
    }
  } else {
    return res.status(405).json({ message: 'Método no permitido' });
  }
}
