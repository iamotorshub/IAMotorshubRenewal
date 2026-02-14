import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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

    // Configurar transporte de email
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

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

    res.json({ success: true, message: "Formulario enviado correctamente" });
  } catch (error) {
    console.error("❌ Error enviando formulario:", error);

    let errorMessage = "Error al enviar el formulario.";
    if (error.code === 'EAUTH') {
      errorMessage = "Error de autenticación SMTP. Verifica que SMTP_PASS no tenga espacios.";
    }

    res.status(500).json({ success: false, message: errorMessage });
  }
}