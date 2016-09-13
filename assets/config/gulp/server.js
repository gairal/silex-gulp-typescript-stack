var conf = require('../config.json');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync:build', function() {
  'use strict';
  browserSync.init({
    server: {
      baseDir: conf.base.build
    },
    reloadDebounce: 2000
  });
});

gulp.task('browser-sync:compile', function() {
  'use strict';
  browserSync.init({
    server: {
      baseDir: conf.base.compile
    },
    reloadDebounce: 2000
  });
});

gulp.task('watch', function () {
  'use strict';
  gulp.watch(conf.base.src + conf.path.sass + conf.files.sassAll, ['sass']);
  gulp.watch(conf.base.src + conf.path.js + conf.files.js, ['js:build']);
  gulp.watch(conf.base.src + conf.path.js + conf.files.ts, ['ts:build']);
  gulp.watch(conf.base.src + conf.files.pug, ['pug:build']);
  gulp.watch([conf.base.src + conf.files.html, conf.base.src + conf.files.tmpl], ['html:build']);
  // gulp.watch([
  //     conf.base.build + conf.path.css + conf.files.css,
  //     conf.base.build + conf.path.js + conf.files.js,
  //     conf.base.build + conf.path.js + conf.files.ts,
  //     conf.base.src + conf.files.pug,
  //     conf.base.build + conf.files.html
  // ]).on('change', browserSync.reload);
});
