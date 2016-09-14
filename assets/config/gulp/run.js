var conf = require('../config.json');
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function (cb) {
  'use strict';
  runSequence('build', 'watch', cb);
});

gulp.task('watch', function () {
  'use strict';
  gulp.watch(conf.base.src + conf.path.sass + conf.files.sassAll, ['sass']);
  gulp.watch(conf.base.src + conf.path.js + conf.files.js, ['js:build']);
  gulp.watch(conf.base.src + conf.path.js + conf.files.ts, ['ts:build']);
});
