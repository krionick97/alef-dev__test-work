'use strict'

const gulp = require('gulp');
const gulpPlugin = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
      server: "./public"
  });
});

gulp.task('pug', function() {
  return gulp.src('app/assets/pug/pages/*.pug')
        .pipe(gulpPlugin.pug({
          pretty: true
        }))
        .pipe(gulp.dest('public'))
        .on('end', browserSync.reload);
});

gulp.task('css', function() {
  return gulp.src('app/styles/*.css')
        .pipe(gulpPlugin.sourcemaps.init())
        .pipe(gulpPlugin.sourcemaps.write())
        .pipe(gulp.dest('public/styles/'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

gulp.task('sass', function() {
  return gulp.src('app/styles/sass/style.sass')
        .pipe(gulpPlugin.sourcemaps.init())
        .pipe(gulpPlugin.sass({}))
        .pipe(gulpPlugin.autoprefixer({}))
        .on("error", gulpPlugin.notify.onError({
          message: "Error: <%= error.message %>",
          title: "Error in style"
        }))
        .pipe(gulpPlugin.sourcemaps.write())
        .pipe(gulp.dest('public/styles/'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

gulp.task('watch', function() {
  gulp.watch('app/assets/pug/**/*.pug', gulp.series('pug'));
  gulp.watch('app/styles/*.css', gulp.series('css'));
  gulp.watch('app/styles/sass/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series(
  gulp.parallel('pug', 'sass', 'css'),
  gulp.parallel('watch', 'serve')
));
