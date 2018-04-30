let gulp = require('gulp');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let browserSync = require('browser-sync').create();

gulp.task('css', function(){
    return gulp.src('src/sass/**/**.scss')
        .pipe(sourcemaps.init())
        .pipe( sass().on('error', sass.logError))
        .pipe( autoprefixer({browsers: ['last 2 versions']}))
        .pipe( sourcemaps.write('src/maps'))
        .pipe( gulp.dest('dist'))
        .pipe( browserSync.stream())
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});

gulp.task('watch', ['css', 'browserSync'], function() {
    gulp.watch('src/sass/**/**.scss', ['css']);
});