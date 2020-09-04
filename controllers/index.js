const router = require('express').Router();

const homeRouts = require('./home-routes.js');

router.use('/', homeRouts);

module.exports = router;