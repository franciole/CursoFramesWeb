const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

const monitorarMudancas = (cb) => {
    watch('app/**/*.html', () => gulp.start('appHTML'))
    watch('app/**/*.css', () => gulp.start('appCSS'))
    watch('app/**/*js', () => gulp.start('appJS'))
    watch('assets/**/*.*', () => gulp.start('appIMG'))
}

const servidor = (cb) => {
    return gulp.src('public').pipe(webserver({
        livereload: true,
        port: 3000,
        open: true
    }))
}

module.exports = { monitorarMudancas, servidor }