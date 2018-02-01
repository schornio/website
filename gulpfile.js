const gulp = require('gulp');

const concat = require('gulp-concat');
const clean = require('gulp-clean-css');

const blok = require('gulp-blok');
const changedInPlace = require('gulp-changed-in-place');

const config = require('./config');

gulp.task('css', () => {
  return gulp.src('./css/**/*.css')
    .pipe(concat('bundle.css'))
    .pipe(clean())
    .pipe(gulp.dest('./views'));

});

gulp.task('deploy', [ 'css' ],  () =>{
  return gulp.src('./views/**/*')
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(blok(config.storyblok));
});

// gulp.task('deploy:live',  () => {
//   let config = { ...config.storyblok, environment: 'live' };
//   return gulp.src('./views/**/*')
//     .pipe(changedInPlace({ firstPass: true }))
//     .pipe(blok(config))
// });

gulp.task('default', [ 'deploy' ]);

gulp.task('watch', [ 'deploy' ], () => {

  gulp.watch([ './views/**/*', './css/**/*' ], [ 'deploy' ]);

});
