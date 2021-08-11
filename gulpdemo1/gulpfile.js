const { series } = require('gulp');


function defaultTask(cb){
    cb()
}

function clean(cb) {
    console.log('ok')
    cb();
}

function build(cb) {
    console.log('ok')
    cb();
}

exports.defaultTask = defaultTask;
exports.default = series(clean, build);

// exports.default = defaultTask