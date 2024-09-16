// server.js

// Importa las bibliotecas necesarias
const express = require('express');
const dotenv = require('dotenv');
const reservasRoutes = require('./routes/reservasRoutes'); // Importa las rutas de reservas
const { swaggerUi, swaggerSpec } = require('./config/swagger'); // Importa Swagger

// Configura dotenv para cargar variables de entorno
dotenv.config();

// Crea una instancia de la aplicación Express
const app = express();
const port = process.env.PORT || 3000; // Configura el puerto del servidor

// Middleware para parsear JSON
app.use(express.json());

// Configura las rutas de reservas
app.use('/api/reservas', reservasRoutes);

// Configura Swagger para servir la documentación de la API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Ruta para la documentación Swagger

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
  console.log(`Documentación disponible en http://localhost:${port}/api-docs`); // Mensaje de éxito con la URL de la documentación
});
