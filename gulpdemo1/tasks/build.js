const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const autoprefix = require('gulp-autoprefixer')
var rev = require('gulp-rev');                      //- 对css、js文件名加MD5后缀
const htmlmin = require('gulp-htmlmin');
var revCollector = require('gulp-rev-collector');   //- 路径替换
const rename = require('gulp-rename');
const sourceFile = path.resolve(__dirname,'../');
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');
const open = require('open');
const zip = require('gulp-zip');

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
    return gulp.src(paths.js)
    .pipe(babel())
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest(des.js))
    .pipe(rev.manifest())
    .pipe(rename('rev_js_manifest.json'))
    .pipe(gulp.dest('build/rev'))
    .pipe(livereload())
    .pipe(connect.reload())
}
function css() {
    return gulp.src(paths.css)
    .pipe(cssnano())
    .pipe(autoprefix({ //通过autoprefix自动添加兼容各大浏览器的样式前缀，例如-webkit-，-o-
        overrideBrowserslist: ['last 2 versions'], //兼容最新2个版本
        cascade: false,
    }))
    .pipe(rev())
    .pipe(gulp.dest(des.css))
    .pipe(rename('rev_css_manifest.json'))
    .pipe(gulp.dest('build/rev'))
    .pipe(livereload())
    .pipe(connect.reload())
}
function img() {
    return gulp.src(paths.img)
    .pipe(gulp.dest(des.img))
    .pipe(livereload())
    .pipe(connect.reload())
}
function html() {
    return gulp.src(['build/rev/*.json', ...paths.html])
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
    .pipe(revCollector({ replaceReved: true }))
    .pipe(gulp.dest(des.html))
    .pipe(livereload())
    .pipe(connect.reload())
}
function api() {
    return gulp.src(paths.api)
    .pipe(gulp.dest(des.api))
    .pipe(livereload());
}
function zipPack() {
    return gulp.src([path.resolve(paths.des, '**/*.*'), '!**/rev/*'])
      .pipe(zip('h5.zip'))
      .pipe(gulp.dest('build'));
  }
function watch() {
    // livereload.listen();    //开始监听
    connect.server({
        root: paths.des,
        livereload: true,
        port: 8088
      });
    gulp.watch(paths.js, js); // 确认监听的目标以及绑定相应的任务
    gulp.watch(paths.css, css);
    gulp.watch(paths.img, img);
    gulp.watch(paths.html).on('change',html);
    gulp.watch(paths.api, api);
    open('http://localhost:8088')
}

export const build = gulp.parallel(js, css, img, html, api);
export const server = gulp.series(build, watch);