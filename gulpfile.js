const gulp = require('gulp');

var deploy      = require('gulp-gh-pages');

// Tasks
require('./gulp/dev.js');
require('./gulp/prod.js');

gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'js:dev'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

gulp.task('deploy', function () {
	return gulp.src("./dist/**/*")
	  .pipe(deploy())
  });

gulp.task(
	'prod',
	gulp.series(
		'clean:prod',
		gulp.parallel('html:prod', 'sass:prod', 'images:prod', 'fonts:prod', 'files:prod', 'js:prod'),
		gulp.parallel('server:prod')
	)
);
