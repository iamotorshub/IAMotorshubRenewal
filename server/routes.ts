import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { nombre, dni, email, webInstagram, descripcion, to } = req.body;

      // Aquí implementarías el envío real de email
      // Por ahora, logueamos la información
      console.log("Contact form submission:", {
        to,
        from: email,
        subject: `Nueva consulta de ${nombre}`,
        body: `
          Nombre: ${nombre}
          DNI: ${dni}
          Email: ${email}
          Web/Instagram: ${webInstagram}
          Descripción: ${descripcion}
        `
      });

      res.json({ success: true, message: "Formulario enviado correctamente" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ success: false, message: "Error al enviar el formulario" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}