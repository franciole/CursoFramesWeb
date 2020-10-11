const { series, parallel } = require('gulp')
const gulp = require('gulp')
const util = require('gulp-util')

const { appHtml, appCss, appJs, appImgs } = require('./gulpTasks/app')
const { depsCss, depsFonts } = require('./gulpTasks/deps')
const { servidor, monitorarMudancas } = require('./gulpTasks/server')

const production = series(parallel(series(appHtml, appCss, appJs, appImgs), series(depsCss, depsFonts)))

const development = series(parallel(series(appHtml, appCss, appJs, appImgs), series(depsCss, depsFonts)),series(servidor, monitorarMudancas))

const mode = util.env.production ? production : development

exports.default = mode