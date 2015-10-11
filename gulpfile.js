'use strict';

let fs   = require('fs');
fs.readdirSync(`${__dirname}/gulp`).forEach(task => require(`./gulp/${task}`));

let gulp = require('gulp');

gulp.task('default', ['build']);
gulp.task('build', ['build:client']);
gulp.task('watch', ['watch:client']);
gulp.task('dev', ['watch', 'server']);
