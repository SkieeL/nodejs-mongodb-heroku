const express = require('express')
const router = express.Router()
const EmpleadoController = require('../controllers/empleado.controller');

router.get('/', EmpleadoController.findAll);

router.get('/empleadosMasTicketsResponden', EmpleadoController.empleadosMasTicketsResponden);

router.get('/empleadosClientesGeneraronTicket', EmpleadoController.empleadosClientesGeneraronTicket);

module.exports = router