const path = require('path');
const { src, dest, parallel } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const sourceFile = path.resolve(__dirname,'../');

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
    .pipe(
        htmlmin({
            removeComments: true,               // 清除HTML注释
            collapseWhitespace: true,           // 压缩空格
            collapseBooleanAttributes: true,    // 省略布尔属性的值 <input checked="true"/> => <input checked>
            removeEmptyAttributes: true,        // 删除所有空格作属性值 <input id=""> => <input>
            removeScriptTypeAttributes: true,   // 删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,// 删除<style>和<link>的type="text/css"
            minifyJS: true,                     // 压缩页面JS
            minifyCSS: true                     // 压缩页面CSS
        }),
    )
    .pipe(dest(des.html));
}
function api() {
    return src(paths.api)
    .pipe(dest(des.api));
}
export default parallel(js, css, img, html, api);