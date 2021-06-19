const express = require('express')
const router = express.Router()
const TicketController = require('../controllers/ticket.controller');

router.get('/', TicketController.findAll);

router.get('/listarDesperfectos', TicketController.listarDesperfectos);

router.get('/cantTicketsSinResolverLoc', TicketController.cantTicketsSinResolverLoc);

router.get('/operacSopTecLanBanAvell', TicketController.operacSopTecLanBanAvell);

router.get('/cantidadTicketsZona1', TicketController.cantidadTicketsZona1);

router.get('/ticketsCombateDeLosPozos', TicketController.ticketsCombateDeLosPozos);

router.get('/ultimos3BanfieldLanus', TicketController.ultimos3BanfieldLanus);

router.get('/todosMenosBanfieldLanus', TicketController.todosMenosBanfieldLanus);

module.exports = router