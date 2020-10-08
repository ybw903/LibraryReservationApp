const router = require('express').Router();
const controller = require('./reservation.controller');

router.post('/',controller.reservation);

module.exports = router;