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
        .pipe(Gulp.dest('css'));
});

// watch for changes
Gulp.task('watch', ['build'], function() {
    Gulp.watch('./sass/**/*', ['styles']);
});

Gulp.task('build', ['styles']);

// run all tasks
Gulp.task('run', ['styles']);
Gulp.task('default', ['styles', 'watch']);