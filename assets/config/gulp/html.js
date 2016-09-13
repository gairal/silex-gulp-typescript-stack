var conf = require('../config.json');
var pkg = require('../../package.json');
var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var replace = require('gulp-replace');
var inject = require('gulp-inject');

gulp.task('html:build', function() {
  'use strict';
  return gulp.src([conf.base.src + conf.files.html])
    .pipe(inject(gulp.src(conf.vendor.js, {read: false}), {addRootSlash: false}))
    .pipe(htmlhint('./config/.htmlhintrc'))
    .pipe(gulp.dest(conf.base.build))
    .pipe(htmlhint.reporter());
});
