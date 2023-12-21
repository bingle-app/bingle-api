const controllers = require('../controllers/healthcheck');
const express = require('express');

const router = express.Router();

router.get('/', controllers.get);

module.exports = router;
