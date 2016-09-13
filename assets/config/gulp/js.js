var conf = require('../config.json');
var options = require('./options');
var pkg = require('../../package.json');
var gulp = require('gulp');
var glob = require('glob');
var replace = require('gulp-replace');
var jshint = require('gulp-jshint');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');

gulp.task('js:build', function() {
  'use strict';
  gulp.src([conf.base.src + conf.files.js])
    .pipe(jshint('./config/.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(conf.base.build));
});

gulp.task('ts:build', function() {
  'use strict';
  var bundler = browserify({
      basedir: '.',
      entries: glob.sync(conf.base.src + conf.files.ts)
    })
    .plugin(tsify, {
      'project': 'config/tsconfig.json'
    });

  return bundler.bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(source('app.js'))
    .pipe(gulp.dest(conf.base.build + conf.path.js));
});
