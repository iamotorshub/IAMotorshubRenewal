import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configurar transporte de email (usar variables de entorno en producción)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || "contacto@iamotorshub.com",
      pass: process.env.SMTP_PASS || ""
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { nombre, email, webInstagram, descripcion } = req.body;

      // Enviar email al administrador
      await transporter.sendMail({
        from: '"IA MOTORSHUB" <contacto@iamotorshub.com>',
        to: "contacto@iamotorshub.com",
        subject: `Nueva consulta de ${nombre}`,
        html: `
          <h2>Nueva Consulta de Demo</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Web/Instagram:</strong> ${webInstagram || 'No proporcionado'}</p>
          <p><strong>Descripción del Negocio:</strong></p>
          <p>${descripcion}</p>
        `
      });

      // Enviar email de confirmación al usuario
      await transporter.sendMail({
        from: '"IA MOTORSHUB" <contacto@iamotorshub.com>',
        to: email,
        subject: "Confirmación de Solicitud - IA MOTORSHUB",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #0080FF;">¡Gracias por tu interés, ${nombre}!</h1>
            <p>Hemos recibido tu solicitud de demo gratuita.</p>
            <p>Nuestro equipo revisará tu información y se pondrá en contacto contigo en las próximas 24 horas para coordinar la demo personalizada.</p>
            <h3>Datos recibidos:</h3>
            <ul>
              <li><strong>Nombre:</strong> ${nombre}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Web/Instagram:</strong> ${webInstagram || 'No proporcionado'}</li>
            </ul>
            <p>Mientras tanto, puedes:</p>
            <ul>
              <li>Contactarnos directamente por WhatsApp: <a href="https://wa.me/5492915206692">+54 9 291 520-6692</a></li>
              <li>Visitar nuestra web: <a href="https://iamotorshub.com">iamotorshub.com</a></li>
            </ul>
            <p style="margin-top: 30px;">Saludos,<br><strong>Equipo IA MOTORSHUB</strong></p>
          </div>
        `
      });

      res.json({ success: true, message: "Formulario enviado correctamente" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ success: false, message: "Error al enviar el formulario" });
    }
  });

  // Appointment scheduling endpoint
  app.post("/api/schedule", async (req, res) => {
    try {
      const { nombre, email, webInstagram, descripcion, fecha, hora } = req.body;

      // Enviar email de confirmación de cita
      await transporter.sendMail({
        from: '"IA MOTORSHUB" <contacto@iamotorshub.com>',
        to: "contacto@iamotorshub.com",
        subject: `Nueva Cita Agendada - ${nombre}`,
        html: `
          <h2>Nueva Cita Agendada</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Web/Instagram:</strong> ${webInstagram || 'No proporcionado'}</p>
          <p><strong>Fecha:</strong> ${fecha}</p>
          <p><strong>Hora:</strong> ${hora}</p>
          <p><strong>Descripción:</strong> ${descripcion}</p>
        `
      });

      await transporter.sendMail({
        from: '"IA MOTORSHUB" <contacto@iamotorshub.com>',
        to: email,
        subject: "Confirmación de Consulta Estratégica - IA MOTORSHUB",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #0080FF;">¡Cita Confirmada, ${nombre}!</h1>
            <p>Tu consulta estratégica ha sido agendada exitosamente.</p>
            <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
              <h3>Detalles de tu Cita:</h3>
              <p><strong>Fecha:</strong> ${fecha}</p>
              <p><strong>Hora:</strong> ${hora}</p>
              <p><strong>Duración:</strong> 30 minutos</p>
            </div>
            <p>Te enviaremos un recordatorio 24 horas antes de tu cita.</p>
            <p>Si necesitas reagendar, contáctanos por WhatsApp: <a href="https://wa.me/5492915206692">+54 9 291 520-6692</a></p>
            <p style="margin-top: 30px;">Saludos,<br><strong>Equipo IA MOTORSHUB</strong></p>
          </div>
        `
      });

      res.json({ success: true, message: "Cita agendada correctamente" });
    } catch (error) {
      console.error("Error scheduling appointment:", error);
      res.status(500).json({ success: false, message: "Error al agendar la cita" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}