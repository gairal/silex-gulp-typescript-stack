var conf = require('../config.json');
var gulp = require('gulp');

gulp.task('copy:build', function () {
  'use strict';
  //Fonts + Translations files + images
  gulp.src([
      conf.base.src + conf.path.fonts + conf.files.fonts,
      conf.base.src + conf.path.i18n + conf.files.i18n,
      conf.base.src + conf.path.images + conf.files.images
    ], {base: './' + conf.base.src})
    .pipe(gulp.dest(conf.base.build));
  //Scripts
  gulp.src(conf.vendor.js, {base: './'})
    .pipe(gulp.dest(conf.base.build));
  return gulp.src(conf.vendor.assets, {base: './'})
    .pipe(gulp.dest(conf.base.build));
});

gulp.task('copy:compile', function () {
  'use strict';
  //Fonts + images
  return gulp.src([
      conf.base.src + conf.path.fonts + conf.files.fonts
    ], {base: './' + conf.base.src})
    .pipe(gulp.dest(conf.base.compile));
});
