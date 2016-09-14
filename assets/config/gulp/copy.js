var conf = require('../config.json');
var gulp = require('gulp');

gulp.task('copy:build', function () {
  'use strict';
  //Fonts
  gulp.src([
      conf.base.src + conf.path.fonts + conf.files.fonts
    ], {base: './' + conf.base.src})
    .pipe(gulp.dest(conf.base.build));
  //Scripts
  gulp.src(conf.vendor.js, {base: './'})
    .pipe(gulp.dest(conf.base.build));
  return gulp.src(conf.vendor.assets, {base: './'})
    .pipe(gulp.dest(conf.base.build));
});
