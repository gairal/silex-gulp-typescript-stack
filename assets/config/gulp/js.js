var conf = require('../config.json');
var options = require('./options');
var pkg = require('../../../package.json');
var gulp = require('gulp');
var glob = require('glob');
var replace = require('gulp-replace');
var jshint = require('gulp-jshint');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('js:build', function() {
  'use strict';
  gulp.src([conf.base.src + conf.files.js])
    .pipe(jshint('./assets/config/.jshintrc'))
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
      'project': './assets/config/tsconfig.json'
    });

  return bundler.bundle()
    .on('error', handleError)
    .pipe(source('app.js'))
    .pipe(gulp.dest(conf.base.build + conf.path.js));
});
