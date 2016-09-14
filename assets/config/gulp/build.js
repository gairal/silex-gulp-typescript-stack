var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb){
  'use strict';
  return runSequence('clean', ['copy:build', 'imagemin:build', 'sass', 'ts:build', 'js:build'], cb);
});
