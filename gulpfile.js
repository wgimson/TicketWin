var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util');

var paths = {
    mocha: ['tests/*.js']
}

gulp.task('test', ()=> {
    return gulp.src(paths.mocha, { read: false })
        .pipe(mocha({
            reporter: 'spec'
        }));
});