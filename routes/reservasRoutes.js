// routes/reservasRoutes.js

const express = require('express');
const {
  crearReserva,
  obtenerReservas,
  obtenerReserva,
  actualizarReserva,
  eliminarReserva,
  filtrarReservas,
} = require('../controllers/reservasController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       required:
 *         - hotel
 *         - fecha
 *         - tipoHabitacion
 *         - numHuespedes
 *         - estado
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado de la reserva
 *         hotel:
 *           type: string
 *           description: Nombre del hotel
 *         fecha:
 *           type: string
 *           format: date
 *           description: Fecha de la reserva
 *         tipoHabitacion:
 *           type: string
 *           description: Tipo de habitación
 *         numHuespedes:
 *           type: integer
 *           description: Número de huéspedes
 *         estado:
 *           type: string
 *           description: Estado de la reserva
 *       example:
 *         id: 1
 *         hotel: "Hotel Hunterx360"
 *         fecha: "2024-08-1"
 *         tipoHabitacion: "Doble"
 *         numHuespedes: 3
 *         estado: "Confirmada"
 */

/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: Gestión de reservas
 */

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 */
router.post('/', crearReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     tags: [Reservas]
 *     parameters:
 *       - in: query
 *         name: hotel
 *         schema:
 *           type: string
 *         description: Filtrar por hotel
 *       - in: query
 *         name: fechaInicio
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de inicio para filtrar
 *       - in: query
 *         name: fechaFin
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de fin para filtrar
 *       - in: query
 *         name: tipoHabitacion
 *         schema:
 *           type: string
 *         description: Filtrar por tipo de habitación
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *         description: Filtrar por estado de la reserva
 *       - in: query
 *         name: numHuespedes
 *         schema:
 *           type: integer
 *         description: Filtrar por número de huéspedes
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 */
router.get('/', obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/:id', obtenerReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: Reserva actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 */
router.put('/:id', actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reserva
 *     responses:
 *       204:
 *         description: Reserva eliminada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', eliminarReserva);

module.exports = router;
