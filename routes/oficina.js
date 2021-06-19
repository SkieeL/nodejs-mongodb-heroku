const express = require('express')
const router = express.Router()
const OficinaController = require('../controllers/oficina.controller');

router.get('/', OficinaController.findAll);

module.exports = router