'use strict';

let router     = require('express').Router();

router.get('/', function (req, res) {
  res.json(['Eat Breakfast', 'Walk the Dog']);
});

module.exports = router;
