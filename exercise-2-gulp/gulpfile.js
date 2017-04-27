var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var connect = require('gulp-connect');
var port = process.env.PORT || 8000;

gulp.task('js', function() {

});

gulp.task('css', function() {
  return gulp.src('src/css/theme.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('serve', function() {
  return connect.server({
    root: 'dist',
    port: port,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('src/js/**', [ ]);
  gulp.watch('src/css/**', [ 'css' ]);
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run('css');
  gulp.run('serve');
  gulp.run('watch');
});
