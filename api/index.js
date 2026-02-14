// Vercel serverless function entry point
const { createServer } = require('http');
const express = require('express');
const path = require('path');

// Import your existing server setup
const app = express();

// Setup your existing routes here or import them
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// For now, simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API working!' });
});

// Contact endpoint from your existing code
app.post("/api/contact", async (req, res) => {
  try {
    const { nombre, email, webInstagram, descripcion } = req.body;

    // For now just return success - you can add email logic later
    res.json({
      success: true,
      message: "Formulario recibido correctamente"
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Error al enviar el formulario."
    });
  }
});

module.exports = app;