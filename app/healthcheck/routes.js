const controllers = require('./controllers');
const express = require('express');

const router = express.Router();

router.get('/', controllers.get);

module.exports = router;
