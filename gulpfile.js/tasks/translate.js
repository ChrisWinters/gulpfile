/**
 * Generate Translation POT File
 *
 * Compiles:
 *      lang/config.text_domain.pot
 *
 * @command gulp translate
 */
var gulp 	= require('gulp');
var sort 	= require('gulp-sort');
var notify 	= require('gulp-notify');
var wpPot 	= require('gulp-wp-pot');
var config 	= require('../config.json');


/**
 * Create Translation File
 */
gulp.task('translate', function () {
    return gulp.src(['!/node_modules', './**/*.php', './*.php'])
    .pipe(sort())
    .pipe(wpPot({domain: config.text_domain, package: config.text_domain, bugReport: config.bug_report, lastTranslator: config.translator_contact, team: config.team_contact}))
    .pipe(gulp.dest(config.language_dest + '/' + config.text_domain + '.pot'))
    .pipe(notify({message: 'Task "translate" created lang/' + config.text_domain + '.pot', onLast: true}))
    .on('error', console.error.bind(console))
});
