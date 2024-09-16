// config/swagger.js

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Reservas de Hotel',
    version: '1.0.0',
    description: 'Proyecto 4 - Reserva Hotelera',
    contact: {
      name: 'Diego Gonzalez',
      email: 'diegojgb1995@gmail.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor de desarrollo',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Ruta a los archivos de rutas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
