const router  = require('express').Router();
const auth = require('./auth');
const seat = require('./seat');
const reservation = require('./reservation');
const authMiddleware = require('../../middleware/auth');

router.use('/auth',auth);
router.use('/seat',seat);

router.use('/reservation',authMiddleware);
router.use('/reservation',reservation);

module.exports = router;