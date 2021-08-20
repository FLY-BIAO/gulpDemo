const { series } = require('gulp');
const {build, server}  = require('./tasks/build');

function defaultTask(cb){
    cb()
}

function clean(cb) {
    console.log('ok')
    cb();
}

exports.server = server;
exports.default = series(clean, build);

// exports.default = defaultTask