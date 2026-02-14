import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configurar transporte de email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // Verificar conexión SMTP al iniciar
  transporter.verify((error, success) => {
    if (error) {
      console.error("❌ Error de conexión SMTP:", error);
      console.log("Verifica tus Secrets: SMTP_USER y SMTP_PASS");
    } else {
      console.log("✅ Servidor SMTP listo para enviar emails");
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { nombre, email, webInstagram, descripcion } = req.body;

      console.log("📧 Procesando solicitud de:", nombre, email);

      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error("❌ Faltan credenciales SMTP en Secrets");
        return res.status(500).json({ 
          success: false, 
          message: "Error de configuración del servidor. Contacta al administrador." 
        });
      }

      // Enviar email al administrador
      const adminEmail = await transporter.sendMail({
        from: process.env.SMTP_USER,
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
      console.log("✅ Email enviado al admin:", adminEmail.messageId);

      // Enviar email de confirmación al usuario
      const userEmail = await transporter.sendMail({
        from: process.env.SMTP_USER,
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
      console.log("✅ Email enviado al cliente:", userEmail.messageId);

      res.json({ success: true, message: "Formulario enviado correctamente" });
    } catch (error: any) {
      console.error("❌ Error enviando formulario:", error);
      
      let errorMessage = "Error al enviar el formulario.";
      if (error.code === 'EAUTH') {
        errorMessage = "Error de autenticación SMTP. Verifica que SMTP_PASS no tenga espacios.";
      }
      
      res.status(500).json({ success: false, message: errorMessage });
    }
  });

  // Appointment scheduling endpoint
  app.post("/api/schedule", async (req, res) => {
    try {
      const { nombre, email, webInstagram, descripcion, fecha, hora } = req.body;

      console.log("📅 Procesando agendamiento para:", nombre, fecha, hora);

      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error("❌ Faltan credenciales SMTP en Secrets");
        return res.status(500).json({ 
          success: false, 
          message: "Error de configuración del servidor. Contacta al administrador." 
        });
      }

      // Enviar email al administrador
      const adminEmail = await transporter.sendMail({
        from: process.env.SMTP_USER,
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
      console.log("✅ Email de cita enviado al admin:", adminEmail.messageId);

      // Enviar email de confirmación al cliente
      const userEmail = await transporter.sendMail({
        from: process.env.SMTP_USER,
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
      console.log("✅ Email de confirmación enviado al cliente:", userEmail.messageId);

      res.json({ success: true, message: "Cita agendada correctamente" });
    } catch (error: any) {
      console.error("❌ Error agendando cita:", error);
      
      let errorMessage = "Error al agendar la cita.";
      if (error.code === 'EAUTH') {
        errorMessage = "Error de autenticación SMTP. Verifica que SMTP_PASS no tenga espacios.";
      }
      
      res.status(500).json({ success: false, message: errorMessage });
    }
  });

  // RentalsAI webhook endpoint for ElevenLabs
  app.post("/api/rentals/webhook", async (req, res) => {
    try {
      const data = req.body;

      if (!data) {
        return res.status(400).json({ error: "No data received" });
      }

      const nombre = data.nombre || 'No especificado';
      const telefono = data.telefono || 'No especificado';
      const email = data.email || 'No especificado';
      const dia = data.dia || 'No especificado';
      const hora = data.hora || 'No especificado';

      // Mensaje para Telegram
      const mensaje = `🏠 RENTALS AI - Nueva consulta:
📱 Nombre: ${nombre}
📞 Teléfono: ${telefono}
📧 Email: ${email}
📅 Fecha: ${dia}
🕐 Hora: ${hora}`;

      // Enviar a Telegram
      const TELEGRAM_BOT_TOKEN = "8334312092:AAGiK-6DEkboJHfEBFrv893SqfYBf09mps0";
      const TELEGRAM_CHAT_ID = "5392151099";

      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: mensaje
        })
      });

      if (response.ok) {
        console.log("✅ Mensaje enviado a Telegram:", mensaje);
        res.json({ status: "success", message: "Datos enviados correctamente" });
      } else {
        throw new Error('Error enviando a Telegram');
      }

    } catch (error: any) {
      console.error("❌ Error en webhook RentalsAI:", error);
      res.status(500).json({ error: "Error procesando webhook", details: error.message });
    }
  });

  // Test endpoint para RentalsAI
  app.get("/api/rentals/test", async (req, res) => {
    try {
      const TELEGRAM_BOT_TOKEN = "8334312092:AAGiK-6DEkboJHfEBFrv893SqfYBf09mps0";
      const TELEGRAM_CHAT_ID = "5392151099";

      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: "🧪 TEST RENTALS AI - Webhook funcionando correctamente"
        })
      });

      if (response.ok) {
        res.json({ status: "test_sent", message: "Test enviado a Telegram" });
      } else {
        throw new Error('Error en test de Telegram');
      }

    } catch (error: any) {
      console.error("❌ Error en test:", error);
      res.status(500).json({ error: "Error en test", details: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
