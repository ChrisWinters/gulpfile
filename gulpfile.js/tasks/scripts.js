/**
 * Default Theme Combined Scripts
 *
 * Compiles:
 *      js/theme.js
 *      js/theme.min.js
 *      js/bootstrap.bundle.js
 *      js/bootstrap.bundle.min.js
 *
 * @command gulp scripts
 * @command gulp script.js
 * @command gulp script.min.js
 */
var gulp        = require('gulp');
var notify      = require('gulp-notify');
var rename      = require('gulp-rename');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var noComments  = require('gulp-strip-comments');
var lineec      = require('gulp-line-ending-corrector');
var config      = require('../config.json');


/**
 * Compile Theme Scripts
 */
gulp.task('script', gulp.series('script.js', 'script.min.js', 'bootstrap.js', 'bootstrap.min.js'));
gulp.task('scripts', gulp.series('script.js', 'script.min.js', 'bootstrap.js', 'bootstrap.min.js'));


/**
 * Create script.js
 */
gulp.task('script.js', function () {
    return gulp.src(config.assets_dest + '/js/script.js')
    .pipe(concat('script.js'))
    .pipe(noComments())
    .pipe(lineec())
    .pipe(gulp.dest(config.js_dest))
    .pipe(notify({message: 'Created "script.js"', onLast: true}))
    .on('error', console.error.bind(console))
});


/**
 * Create script.min.js
 */
gulp.task('script.min.js', function () {
    return gulp.src(config.assets_dest + '/js/script.js')
    .pipe(concat('script.min.js'))
    .pipe(noComments())
    .pipe(lineec())
    .pipe(uglify())
    .pipe(gulp.dest(config.js_dest))
    .pipe(notify({message: 'Created "script.min.js"', onLast: true}))
    .on('error', console.error.bind(console))
});


/**
 * Create bootstrap.js
 */
gulp.task('bootstrap.js', function () {
    return gulp.src(config.assets_dest + '/js/bootstrap.bundle.js')
    .pipe(concat('bootstrap.bundle.js'))
    .pipe(noComments())
    .pipe(lineec())
    .pipe(gulp.dest(config.js_dest))
    .pipe(notify({message: 'Created "bootstrap.bundle.js"', onLast: true}))
    .on('error', console.error.bind(console))
});


/**
 * Create bootstrap.min.js
 */
gulp.task('bootstrap.min.js', function () {
    return gulp.src(config.assets_dest + '/js/bootstrap.bundle.js')
    .pipe(concat('bootstrap.bundle.min.js'))
    .pipe(noComments())
    .pipe(lineec())
    .pipe(uglify())
    .pipe(gulp.dest(config.js_dest))
    .pipe(notify({message: 'Created "bootstrap.bundle.min.js"', onLast: true}))
    .on('error', console.error.bind(console))
});
