'use strict';

let gulp       = require('gulp');
let typescript = require('gulp-typescript');

gulp.task('build:client', function () {
  let project = typescript.createProject('client/tsconfig.json');
  return project.src()
    .pipe(typescript(project))
    .pipe(gulp.dest('public'));
});

gulp.task('watch:client', function () {
  gulp.watch('client/**/*.ts', ['build:client']);
});
