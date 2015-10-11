'use strict';

let bodyParser = require('body-parser');
let router     = require('express').Router();

router.use(bodyParser.json());

router.use('/', require('./static'));

module.exports = router;
