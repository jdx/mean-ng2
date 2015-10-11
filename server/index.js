'use strict';

let express = require('express');
let logger  = require('morgan');
let config  = require('./config');

let app = express();
app.use(logger(config.production ? 'combined' : 'dev'));
app.use(require('./controllers'));

let server = app.listen(config.port, function () {
  console.log(`server listening on ${server.address().port}`);
});
