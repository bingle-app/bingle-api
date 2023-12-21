const controllers = require('../controllers/healthcheck').default;
const express = require('express');

const router = express.Router();

router.get('/', controllers.get);

module.exports = router;
