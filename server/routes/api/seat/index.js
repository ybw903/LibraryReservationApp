const router = require('express').Router();
const authMiddleware = require('../../../middleware/auth');
const controller = require('./seat.controller');

router.get('/:l/:r', controller.seats);

router.put('/:id',controller.seat_reserve);

module.exports = router;