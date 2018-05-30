var gulp = require('gulp');

// gulp plugins and utils
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var zip = require('gulp-zip');

// postcss plugins
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-function');
var cssnano = require('cssnano');
var customProperties = require('postcss-custom-properties');
var easyimport = require('postcss-easy-import');

gulp.task('styles', function () {
    var processors = [
        easyimport,
        customProperties,
        colorFunction(),
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano()
    ];
    
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(concat('theme.css'))
        .pipe(gulp.dest('./assets'));
});

gulp.task('scripts', function() {
    return gulp.src(['src/js/*.js'])
        .pipe(uglify())
        .pipe(concat('theme.js'))
        .pipe(gulp.dest('assets/'));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('build', ['styles', 'scripts'], function () {
});

gulp.task('zip', ['build'], function() {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**',
        '!src', '!src/**',
        '!gulpfile.js', '!package-lock.json'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
});

gulp.task('default', ['build'], function () {
    gulp.start('watch');
});
