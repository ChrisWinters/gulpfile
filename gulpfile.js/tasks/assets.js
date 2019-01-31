/**
 * Copy Theme Assets
 *
 * @command gulp assets
 */
var gulp    = require('gulp');
var notify  = require('gulp-notify');
var concat  = require('gulp-concat');
var replace = require('gulp-replace');
var config  = require('../config.json');


/**
 * Copy Assets
 */
gulp.task('assets', function(done) {
    var stream

    // Custom Variables Asset
    gulp.src(config.assets_src + '/_custom-variables.scss').pipe(gulp.dest(config.assets_dest))

    // Custom Style Asset
    gulp.src(config.assets_src + '/_custom-styling.scss').pipe(gulp.dest(config.assets_dest))

    // SCSS Asset
    gulp.src(config.assets_src + '/scss/style.scss').pipe(gulp.dest(config.assets_dest + '/css'))

    // JavaScript Assets
    gulp.src(config.assets_src + '/scripts/script.js').pipe(gulp.dest(config.assets_dest + '/js'))

    // Image Assets
    gulp.src(config.assets_src + '/images/*.{png,jpg,gif,svg}').pipe(gulp.dest(config.assets_dest + '/images'))

    // Bootstrap
    gulp.src('./node_modules/bootstrap/scss/**/*.scss').pipe(gulp.dest(config.assets_dest + '/css/bootstrap4'))
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.bundle.js').pipe(gulp.dest(config.assets_dest + '/js'))

    .pipe(notify({message: 'Assets Moved', onLast: true}))

    done();
    return stream
});
