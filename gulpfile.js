var gulp = require( "gulp" );
var uglify = require( "gulp-uglify" );
var rename = require( "gulp-rename" );
var concat = require( "gulp-concat" );
var clean = require( "gulp-clean" );
var sass = require( "gulp-sass" );
var cssmin = require( "gulp-cssmin" );
var rs = require( "run-sequence" );
var replace = require( "gulp-replace" );
var livereload = require( "gulp-livereload" );
var htmlmin = require( "gulp-htmlmin" );
var bower = require( "main-bower-files" );
var debug = require( "gulp-debug" );
var autoprefixer = require( "gulp-autoprefixer" );

gulp.task( "clean", function() {
	return gulp.src( "dist" )
		.pipe( clean() );
} );

gulp.task( "copy", function() {
	return gulp.src( "images/**/*" )
		.pipe( gulp.dest( "dist/images" ) );
} );

gulp.task( "copym", function() {
	return gulp.src( "{robots.txt,favicon.png}" )
		.pipe( gulp.dest( "dist" ) );
} );

gulp.task( "copyf", function() {
	return gulp.src( "bower_components/components-font-awesome/fonts/**/*" )
		.pipe( gulp.dest( "dist/fonts" ) );
} );

gulp.task( "copyi", function() {
	return gulp.src( "index.min.html" )
		.pipe( rename( "index.html" ) )
		.pipe( htmlmin( { collapseWhitespace: true } ) )
		.pipe( gulp.dest( "dist" ) );
} );

gulp.task( "copyh", function() {
	return gulp.src( "js/**/*.html" )
		.pipe( htmlmin( { collapseWhitespace: true } ) )
		.pipe( gulp.dest( "dist/js" ) );
} );

gulp.task( "jsmin", function() {
	return gulp.src( "js/**/*.js" )
		.pipe( concat( "csus.js" ) )
		.pipe( uglify() )
		.pipe( rename( { suffix: ".min" } ) )
		.pipe( gulp.dest( "dist/js" ) );
} );

gulp.task( "jsminv", function() {
	return gulp.src( bower( "**/*.js" ) )
		.pipe( concat( "vendor.js" ) )
		.pipe( uglify() )
		.pipe( rename( { suffix: ".min" } ) )
		.pipe( gulp.dest( "dist/js" ) );
} );

gulp.task( "cssmin", function() {
	return gulp.src( "css/**/*.scss" )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( autoprefixer( {
			browsers: ['last 2 versions']
		} ) )
		.pipe( cssmin() )
		.pipe( rename( "csus.min.css" ) )
		.pipe( gulp.dest( "dist/css" ) );
} );

gulp.task( "cssminv", function() {
	return gulp.src( bower( "**/*.css" ) )
		.pipe( concat( "vendor.css" ) )
		.pipe( cssmin() )
		.pipe( rename( { suffix: ".min" } ) )
		.pipe( gulp.dest( "dist/css" ) );
} );

gulp.task( "watch", ["jsmin", "cssmin", "jsminv", "cssminv"], function() {
	livereload.listen();
	
	gulp.watch( "js/**/*.js", ["jsmin"] );
	gulp.watch( "css/**/*.scss", ["cssmin"] );
	gulp.watch( "bower_components/**/*.js", ["jsminv"] );
	gulp.watch( "bower_components/**/*.css", ["cssminv"] );
} );

gulp.task( "build", function() {
	rs( "clean", ["copy", "copyi", "copym", "copyh", "copyf", "jsmin", "cssmin", "jsminv", "cssminv"] );
} );
