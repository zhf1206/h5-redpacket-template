var gulp = require('gulp');
var connect = require('gulp-connect');
gulp.task('webserver', function () {
    connect.server({
        host: 'localhost',
        livereload: true,
        port: 3000,
        directoryListing: {
            path: './',
            enable: true
        }
    });

});

gulp.task('default', ['webserver']);