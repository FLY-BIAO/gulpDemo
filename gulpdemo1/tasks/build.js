const path = require('path')
const { src, dest, parallel } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano')
const sourceFile = path.resolve(__dirname,'../')

const paths = {
    html: path.resolve(sourceFile,'pages/*.html'),
    js: path.resolve(sourceFile,'pages/js/*'),
    css: path.resolve(sourceFile,'pages/css/*'),
    img: path.resolve(sourceFile,'pages/img/*'),
    api: path.resolve(sourceFile,'pages/api/*'),
    des: path.resolve(sourceFile,'bulid')
}
const des = {
    html: path.join(paths.des,'pages'),
    js: path.join(paths.des,'pages/js'),
    css: path.join(paths.des,'pages/css'),
    img: path.join(paths.des,'pages/img'),
    api: path.join(paths.des,'pages/api')
}

function js() {
    return src(paths.js)
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest(des.js));
}
function css() {
    return src(paths.css)
    .pipe(cssnano())
    .pipe(dest(des.css));
}
function img() {
    return src(paths.img)
    .pipe(dest(des.img));
}
function html() {
    return src(paths.html)
    .pipe(dest(des.html));
}
function api() {
    return src(paths.api)
    .pipe(dest(des.api));
}
export default parallel(js, css, img, html, api);