'use strict';

let gulp    = require('gulp');
let nodemon = require('gulp-nodemon');

gulp.task('server', function () {
  nodemon({
    script: 'server/index.js',
    ext:    'js',
    ignore: ['public*'],
  });
});
