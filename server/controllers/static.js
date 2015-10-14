'use strict';

let express = require('express');
let router  = express.Router();

router.use(express.static(`${__dirname}/../../public`));
router.use(express.static(`${__dirname}/../../bower_components`));
router.use('/templates', express.static(`${__dirname}/../../client/templates`));

router.get('/', function (req, res) {
  res.render('index.html.ejs');
});

module.exports = router;
