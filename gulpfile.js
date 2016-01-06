var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var jsmin = require('gulp-jsmin');

gulp.task('html', function() {
	return gulp.src('app/*.html')
	  .pipe(gulp.dest('dist'));
});

gulp.task('img', function () {
	return gulp.src(['app/img/*'])
		.pipe(gulp.dest('dist/img'));
});

gulp.task('js', function () {
	return gulp.src('app/js/**/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('style', function () {
	return gulp.src('app/styles/**/*.scss')
		.pipe(sass())
	  .pipe(gulp.dest('dist/style'));
});

gulp.task('extra-js', function () {
	return gulp.src(['node_modules/jquery/dist/jquery.js','node_modules/semantic-ui-stylus/dist/semantic.min.js'])
		.pipe(concat('extra.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('extra-css', function () {
	return gulp.src(['node_modules/semantic-ui-stylus/dist/semantic.min.css','node_modules/semantic-ui-stylus/dist/themes*/**'])
		.pipe(gulp.dest('dist/style'));
});
gulp.task('extra', ['extra-js','extra-css']);

// gulp.task('build', ['copy','js','style','browserify']);
gulp.task('build', ['html', 'img', 'js','style', 'extra']);

gulp.task('build:watch', function () {
	gulp.watch(['**/*.html','app/**/*.*'],['html','js','style']);
});
