const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/cliente.controller');

router.get('/', ClienteController.findAll);

router.get('/promedioCuotasAbonadas', ClienteController.promedioCuotasAbonadas);

router.get('/cantidadClientesPaganXMonto', ClienteController.cantidadClientesPaganXMonto);

router.get('/clientesCercanosSopTec', ClienteController.clientesCercanosSopTec);

module.exports = router