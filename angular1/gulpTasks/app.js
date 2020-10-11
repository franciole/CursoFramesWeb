const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

const appHtml = (cb) => {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'))
}

const appCss = (cb) => {
    return gulp.src('app/**/*.css')
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets/css'))
}

const appJs = (cb) => {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/assets/js'))
}

const appImgs = (cb) => {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('public/assets/imgs'))
}

module.exports = { appHtml, appCss, appJs, appImgs }