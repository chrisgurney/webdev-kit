var Connect = require('gulp-connect');
var Del = require('del');
var Gulp = require('gulp');
var Include = require('gulp-file-include');

/* ************* */
/* Configuration */
/* ************* */

var paths = require('./gulpfile.config.json');

/* ***********
   Build Tasks
   *********** */

Gulp.task('build:css', function(done) {

  return Gulp.src(paths.src.css)
    .pipe(Gulp.dest(paths.output.css))
    .pipe(Connect.reload());

});

Gulp.task('build:html', function(done) {

  return Gulp.src(paths.src.html)
		.pipe(Include({
			prefix: '@@',
			basepath: paths.src.includes
		}))  
		.pipe(Gulp.dest(paths.output.base))
		.pipe(Connect.reload());	 

});

Gulp.task('build:images', function(done) {

	return Gulp.src(paths.src.images)
		.pipe(Gulp.dest(paths.output.images))
		.pipe(Connect.reload());

});

Gulp.task('build:js', function(done) {

  return Gulp.src(paths.src.js)
		.pipe(Gulp.dest(paths.output.js))
		.pipe(Connect.reload());

});

Gulp.task('build:meta', function(done) {

	return Gulp.src(paths.src.metaFiles, {dot: true})
		.pipe(Gulp.dest(paths.output.base))
		.pipe(Connect.reload());

});

Gulp.task('build:vendor', function(done) {

	return Gulp.src(paths.src.vendor)
		.pipe(Gulp.dest(paths.output.vendor))
		.pipe(Connect.reload());

});

/* ***********
   Watch Tasks
   *********** */

Gulp.task('watch:css', function(done) {

	return Gulp.watch(paths.src.css, 
		Gulp.series('build:css'));

});

Gulp.task('watch:html', function(done) {

	return Gulp.watch(paths.src.html, 
		Gulp.series('build:html'));

});

Gulp.task('watch:images', function(done) {

	return Gulp.watch(paths.src.images, 
		Gulp.series('build:images'));

});

Gulp.task('watch:js', function(done) {

	return Gulp.watch(paths.src.js, 
		Gulp.series('build:js'));

});

Gulp.task('watch:meta', function(done) {

	return Gulp.watch(paths.src.metaFiles, 
		Gulp.series('build:meta'));

});

Gulp.task('watch:vendor', function(done) {

	return Gulp.watch(paths.src.vendor, 
		Gulp.series('build:vendor'));

});

/* ***********
   Clean Tasks 
   *********** */

Gulp.task('clean', function(done) {
  return Del([
    paths.output.base
  ]);
});

/* **********
   Main Tasks
   ********** */

Gulp.task('build',
	Gulp.parallel(
		'build:css',
		'build:html',
		'build:meta',
		'build:images',
		'build:js',
		'build:vendor'			
	),
	function(done) {
		done();
	}
);	

Gulp.task('server', function() {

  Connect.server({
  	root: paths.output.base,
  	livereload: true
  });

});

Gulp.task('watch', 
	Gulp.parallel(
		'watch:css',
		'watch:html',	
		'watch:images',
		'watch:js',
		'watch:meta',
		'watch:vendor'),
	function(done) {
		done();
	}
);

Gulp.task('default',
	Gulp.series(
		'clean', 
		'build',
		Gulp.parallel(
			'server',
			'watch'
		),
	function(done) {
		done();
	})
);
