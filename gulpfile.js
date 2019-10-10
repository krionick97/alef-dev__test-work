'use strict'

const gulp = require('gulp');
const gulpPlugin = require('gulp-load-plugins')();

gulp.task('pug', function() {
  return gulp.src('app/assets/pug/pages/*.pug')
        .pipe(gulpPlugin.pug({
          pretty: true
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('sass', function() {
  return gulp.src('app/styles/sass/style.sass')
        .pipe(gulpPlugin.sass())
        .pipe(gulp.dest('public/styles/'));
});