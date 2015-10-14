'use strict';

let bodyParser = require('body-parser');
let router     = require('express').Router();

router.use('/', require('./static'));
router.use(bodyParser.json());
router.use('/api', require('./api'));

module.exports = router;
