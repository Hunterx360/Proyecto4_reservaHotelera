// controllers/reservasController.js

// Array para almacenar reservas en memoria (Ejemplo, reemplaza con tu implementación real)
let reservas = [
  { id: 1, hotel: 'Hotel LeondeCollao', fecha: '2024-08-01', tipoHabitacion: 'Doble', numHuespedes: 3, estado: 'Confirmada' },
  { id: 2, hotel: 'Hotel VialalaD', fecha: '2024-08-05', tipoHabitacion: 'Suite', numHuespedes: 2, estado: 'Pendiente' },
  // Agrega más datos de ejemplo según sea necesario
];

const obtenerReservas = (req, res) => {
  let filteredReservas = reservas;

  // Filtrar por hotel
  if (req.query.hotel) {
    filteredReservas = filteredReservas.filter(reserva =>
      reserva.hotel.toLowerCase().includes(req.query.hotel.toLowerCase())
    );
  }

  // Filtrar por fecha de inicio y fin
  if (req.query.fechaInicio && req.query.fechaFin) {
    const fechaInicio = new Date(req.query.fechaInicio);
    const fechaFin = new Date(req.query.fechaFin);
    filteredReservas = filteredReservas.filter(reserva => {
      const fechaReserva = new Date(reserva.fecha);
      return fechaReserva >= fechaInicio && fechaReserva <= fechaFin;
    });
  }

  // Filtrar por tipo de habitación
  if (req.query.tipoHabitacion) {
    filteredReservas = filteredReservas.filter(reserva =>
      reserva.tipoHabitacion.toLowerCase().includes(req.query.tipoHabitacion.toLowerCase())
    );
  }

  // Filtrar por estado
  if (req.query.estado) {
    filteredReservas = filteredReservas.filter(reserva =>
      reserva.estado.toLowerCase().includes(req.query.estado.toLowerCase())
    );
  }

  // Filtrar por número de huéspedes
  if (req.query.numHuespedes) {
    const numHuespedes = parseInt(req.query.numHuespedes, 10);
    filteredReservas = filteredReservas.filter(reserva => reserva.numHuespedes === numHuespedes);
  }

  // Responder con las reservas filtradas
  res.status(200).json(filteredReservas);
};

const crearReserva = (req, res) => {
  const nuevaReserva = req.body;
  nuevaReserva.id = reservas.length + 1; // Genera un ID simple
  reservas.push(nuevaReserva);
  res.status(201).json(nuevaReserva);
};

const obtenerReserva = (req, res) => {
  const { id } = req.params;
  const reserva = reservas.find(r => r.id === parseInt(id, 10));
  if (reserva) {
    res.status(200).json(reserva);
  } else {
    res.status(404).json({ mensaje: 'Reserva no encontrada' });
  }
};

const actualizarReserva = (req, res) => {
  const { id } = req.params;
  const reservaIndex = reservas.findIndex(r => r.id === parseInt(id, 10));
  if (reservaIndex !== -1) {
    reservas[reservaIndex] = { ...reservas[reservaIndex], ...req.body };
    res.status(200).json(reservas[reservaIndex]);
  } else {
    res.status(404).json({ mensaje: 'Reserva no encontrada' });
  }
};

const eliminarReserva = (req, res) => {
  const { id } = req.params;
  const reservaIndex = reservas.findIndex(r => r.id === parseInt(id, 10));
  if (reservaIndex !== -1) {
    reservas.splice(reservaIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ mensaje: 'Reserva no encontrada' });
  }
};

module.exports = {
  crearReserva,
  obtenerReservas,
  obtenerReserva,
  actualizarReserva,
  eliminarReserva,
};
