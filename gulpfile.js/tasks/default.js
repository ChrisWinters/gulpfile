/**
 * Default Task Commands
 *
 * @command gulp default
 * @command gulp all
 * @command gulp watch
 * @command gulp clean
 */
var gulp        = require('gulp');
var del        	= require('del');
var browserSync = require('browser-sync');
var config  	= require('../config.json');

function browserReload(done) {
  browserSync.reload();
  done();
}


/**
 * Default Task
 */
gulp.task('default', gulp.series('assets', 'styles'));


/**
 * Run All Builder Tasks
 */
gulp.task('all', gulp.series('assets', 'styles', 'scripts', 'images', 'translate'));


/**
 * Watch For File Changes & Run Tasks
 */
gulp.task('watch', gulp.series('assets', 'style', 'scripts', function() {
    gulp.watch(['!/node_modules', './**/*.php', './*.php'], gulp.series(browserReload))
    gulp.watch([assets_src + '/*.scss', assets_src + '/scss/*.scss'], gulp.series('assets', 'style', browserReload))
    gulp.watch([assets_src + './script.js'], gulp.series('assets', 'scripts', browserReload))
    browserSync.init({proxy: config.project_url, injectChanges: true, open: true})
}));


/**
 * Delete Theme Assets After Compile
 */
gulp.task('clean', function() {
    return del([config.assets_dest])
});
