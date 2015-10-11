'use strict';

let express = require('express');
let router  = express.Router();

router.use(express.static(`${__dirname}/../../public`));

router.get('/', function (req, res) {
  res.render('index.html.ejs');
});

module.exports = router;
