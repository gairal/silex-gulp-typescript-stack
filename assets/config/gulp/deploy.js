var conf = require('../config.json');
var options = require('./options');
var gulp = require('gulp');
var scp = require('gulp-scp2');
var runSequence = require('run-sequence');

gulp.task('scp', function() {
  'use strict';
  return gulp.src(options.src)
  .pipe(scp({
    host: options.host,
    username: 'webadmin',
    dest: options.dest,
    agent: process.env['SSH_AUTH_SOCK'],
    agentForward: true
  }))
  .on('error', function(err) {
    console.log(err);
  });
});

gulp.task('deploy', function (cb){
  'use strict';
  runSequence('compile', 'scp', cb);
});
