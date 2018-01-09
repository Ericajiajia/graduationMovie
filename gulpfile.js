const gulp = require('gulp')
const fontSpider = require('gulp-font-spider')


// 字蛛生效
gulp.task('fontspider', function () {
	gulp.src('./index.html')
    .pipe(fontSpider())
})
gulp.task('default', ['fontspider'])