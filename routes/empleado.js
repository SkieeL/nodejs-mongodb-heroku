const express = require('express')
const router = express.Router()
const EmpleadoController = require('../controllers/empleado.controller');

router.get('/', EmpleadoController.findAll);

module.exports = router