var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
