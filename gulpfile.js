'use strict'

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');
const newer = require('gulp-newer');
const autoprefixer = require('autoprefixer-stylus');
const browserSync = require('browser-sync').create();
// var connectPHP = require('gulp-connect-php');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('styles', function(){
    return gulp.src('frontend/css/main.styl', {base: 'frontend'})
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(stylus({
            pretty:true,
            use:[autoprefixer()]
        }))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('public'));
});
// gulp.task('php', function(){
//   connectPHP.server({ base: './public', keepalive:true, hostname: 'localhost', port:8080, open: false});
// });
// gulp.task('browserSync', function() {
//     browserSync.init({
//         proxy: 'Portfolio.dev'
//     });
//     browserSync.watch('public/*.php').on('change', function () {
//         browserSync.reload();
//     });
// });
//  gulp.task('browserSyn', function() {
//     connectPHP.server({base: './public', keepalive:true,hostname: 'localhost',port:9000,open: false}, function (){
//         browserSync.init({
//             proxy: 'Portfolio.dev',
//             notify: false
//         });
//     });
//     gulp.watch('public/*.php').on('change', function () {
//         browserSync.reload;
//     });
// });

gulp.task('clean', function() {
    return del('public');
});

gulp.task('assets', function() {
    return gulp.src('frontend/assets/**')
    	.pipe(newer('public'))
        .pipe(gulp.dest('public'));
});

gulp.task('build', ['styles', 'assets', 'watch','serve']);

gulp.task('watch', function() {
gulp.watch('frontend/css/**/*.*', ['styles']);
    gulp.watch('frontend/assets/**/*.*', ['assets']);
});


gulp.task('serve', function () {
    browserSync.init({
        proxy:"localhost",
        notify: false
    });
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});
    