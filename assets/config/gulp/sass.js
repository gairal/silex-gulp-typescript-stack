var conf = require('../config.json');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  'use strict';

  gulp.src([
    conf.base.src + conf.path.sass + conf.files.sassAll,
    '!' + conf.base.src + conf.path.sass + '**/_mixins.scss'
  ])
  .pipe(sassLint({configFile: 'config/sass-lint.yml'}))
  .pipe(sassLint.format());

  return gulp.src(conf.base.src + conf.path.sass + conf.files.sass)
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(conf.base.build + conf.path.css));
});
