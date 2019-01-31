'use strict';
/**
 * Gulpfile Home
 * @see gulpfile.js/tasks
 *
 * @command npm install --save-dev
 * @command gulp --silent
 * @command gulp watch --silent
 * @command gulp clean --silent
 * @command gulp bump --silent
 *
 * @command gulp assets --silent
 * @command gulp styles --silent
 * @command gulp scripts --silent
 * @command gulp images --silent
 * @command gulp translate --silent
 */
var gulp        = require('gulp');
var requireDir  = require('require-dir');
var forwardRef 	= require('undertaker-forward-reference');

gulp.registry(forwardRef());
requireDir('./tasks', {extensions: ['.js']});
