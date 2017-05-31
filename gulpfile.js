'use strict';

const Gulp = require('gulp');
const Sass = require('gulp-sass');
const Autoprefixer = require('gulp-autoprefixer');

// Build styles
Gulp.task('styles', function() {
    Gulp.src('./sass/style.scss')
        .pipe(Sass().on('error', Sass.logError))
        .pipe(Autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(Gulp.dest('dest/css'));
});

// JavaScript processing
Gulp.task('js', function() {
  Gulp.src('js/main.js')
      .pipe(Gulp.dest('dest/js'));
});

// watch for changes
Gulp.task('watch', ['build'], function() {
    Gulp.watch('./sass/**/*', ['styles']);
    Gulp.watch('./js/**/*', ['js']);
});

Gulp.task('build', ['styles', 'js']);

// run all tasks
Gulp.task('run', ['styles', 'js']);
Gulp.task('default', ['run', 'watch']);