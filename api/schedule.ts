import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { name, email, phone, date, time, service } = req.body;

    // Validación de campos requeridos
    if (!name || !email || !date || !time) {
      return res.status(400).json({ 
        message: 'Faltan campos requeridos: name, email, date, time' 
      });
    }

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar el email para el negocio
    const businessMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Nueva cita agendada - ${name}`,
      html: `
        <h2>Nueva cita agendada</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Fecha:</strong> ${date}</p>
        <p><strong>Hora:</strong> ${time}</p>
        <p><strong>Servicio:</strong> ${service || 'No especificado'}</p>
      `,
    };

    // Configurar el email de confirmación para el cliente
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmación de cita - IA Motorshub',
      html: `
        <h2>Confirmación de cita</h2>
        <p>Hola ${name},</p>
        <p>Tu cita ha sido agendada exitosamente con los siguientes detalles:</p>
        <p><strong>Fecha:</strong> ${date}</p>
        <p><strong>Hora:</strong> ${time}</p>
        <p><strong>Servicio:</strong> ${service || 'No especificado'}</p>
        <br>
        <p>Si necesitas modificar o cancelar tu cita, por favor contáctanos.</p>
        <p>Gracias por confiar en IA Motorshub.</p>
      `,
    };

    // Enviar ambos emails
    await Promise.all([
      transporter.sendMail(businessMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return res.status(200).json({ 
      message: 'Cita agendada correctamente' 
    });
  } catch (error) {
    console.error('Error al agendar la cita:', error);
    return res.status(500).json({ 
      message: 'Error al agendar la cita',
      error: error instanceof Error ? error.message : 'Error desconocido'
    });
  }
}
