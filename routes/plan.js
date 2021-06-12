const express = require('express')
const router = express.Router()
const PlanController = require('../controllers/plan.controller');

router.get('/', PlanController.findAll);

module.exports = router