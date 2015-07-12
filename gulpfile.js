var gulp = require('gulp');
var jade = require('gulp-jade');
//var concat = require("gulp-concat");

gulp.task('templates', function() {
  gulp.src('./views/*.jade')
    .pipe(jade({}))
    .pipe(gulp.dest('./public/views'))
});
//gulp.task("js", function() {
//  gulp.src("./source/javascripts/**/*.js")
//  .pipe(concat("bundle.js"))
//  .pipe(gulp.dest("./public/javascripts/"))
//});

gulp.task('default', function(){
  gulp.watch('./views/*.jade', ['templates']);

});
