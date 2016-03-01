var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

/* For SASS */
gulp.task('sass', function () {

    gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('/css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('/css'))

});

/* For UGLIFY minify JS */
gulp.task('uglify', function () {

    gulp.src(htmlPath + 'js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(htmlPath + 'js/min/'))

});

/************************************************
 * Compilation des codes et lancement du server *
 ************************************************/

gulp.task('compil', ['sass', 'uglify'])