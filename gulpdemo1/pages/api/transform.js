
/**
 * 矩阵乘法
 * @param {Array} matrixA 
 * @param {Array} matrixB 
 * @param {Array} ···
 * @param {Array} matrixN
 * @returns 
 */
function mtrMult3d(matrixA, matrixB) {
    let res = [];
    let b = 0;
    for (let k = 0; k < 16; k++) {
        let a = Math.floor(k / 4);
        let n = 0;

        for (let j = 0; j < 16; j += 4) {
            n += matrixA[a + j] * matrixB[b + j];
        }
        b++;
        if (b == 4) b = 0;
        res.push(n)
    }
    let rest = [].slice.call(arguments,2,arguments.length)
    if(rest.length)
        return mtrMult3d(res, ...rest)
    else
        return res;
}

/**
 * 缩放矩阵计算
 * @param {Number} x 缩放系数
 * @param {Number} y default:x
 * @param {Number} z default:x
 * @returns 
 */
function scale3d(x, y=x, z=x) {
    return [
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1
    ];
}

/**
 * 缩放矩阵计算
 * @param {Number} x 平移距离
 * @param {Number} y default:x
 * @param {Number} z default:x
 * @returns 
 */
function translate3d(x, y=x, z=x) {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1
    ];
}

/**
 * 输入角度计算旋转矩阵
 * @param {Number} x 旋转角度
 * @param {Number} y default:x
 * @param {Number} z default:x
 * @returns 
 */
function rotate3d(x, y=x, z=x) {
    let mixMatrix =  mtrMult3d( rotateX3d(x), rotateY3d(y));
    return  mtrMult3d( mixMatrix, rotateZ3d(z));
}

/**
 * X轴旋转矩阵
 * @param {Number} a 旋转角度
 * @returns 
 */
function rotateX3d(a) {
    if (a && a.endsWith('deg')){
        a = parseFloat(a)*Math.PI/180
    }
    return [
        1, 0, 0, 0,
        0, Math.cos(a), -Math.sin(a), 0,
        0, Math.sin(a), Math.cos(a), 0,
        0, 0, 0, 1
    ];
}

/**
 * Y轴旋转矩阵
 * @param {Number} a 旋转角度
 * @returns 
 */
function rotateY3d(a) {
    if (a && a.endsWith('deg')){
        a = parseFloat(a)*Math.PI/180
    }
    return [
        Math.cos(a), 0, Math.sin(a), 0,
        0, 1, 0, 0,
        -Math.sin(a), 0, Math.cos(a), 0,
        0, 0, 0, 1
    ];
}

/**
 * Z轴旋转矩阵
 * @param {Number} a 旋转角度
 * @returns 
 */
function rotateZ3d(a) {
    if (a && a.endsWith('deg')){
        a = parseFloat(a)*Math.PI/180
    }
    return [
        Math.cos(a), -Math.sin(a), 0, 0,
        Math.sin(a), Math.cos(a), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
}
/**
 * 将矩阵数组转换为css矩阵字符串
 * @param {Array} array 
 * @returns {string} str
 */
function mtrToCss3d(array) {
    return "matrix3d(" + array.join(',') + ")";
}

//** 2D */

/**
 * 矩阵乘法
 * @param {Array} matrixA 
 * @param {Array} matrixB 
 * @param {Array} ···
 * @param {Array} matrixN
 * @returns 
 */
 function mtrMult(matrixA, matrixB) {
    let res = [];
    let b = 0;
    for (let k = 0; k < 9; k++) {
        let a = Math.floor(k / 3);
        let n = 0;

        for (let j = 0; j < 9; j += 3) {
            n += matrixA[a + j] * matrixB[b + j];
        }
        b++;
        if (b == 3) b = 0;
        res.push(n)
    }
    let rest = [].slice.call(arguments,2,arguments.length)
    if(rest.length)
        return mtrMult(res, ...rest)
    else
        return res;
}

/**
 * 缩放矩阵计算
 * @param {Number} x 缩放系数
 * @param {Number} y default:x
 * @returns 
 */
function scale(x, y=x) {
    return [
        x, 0, 0,
        0, y, 0,
        0, 0, 1
    ];
}

/**
 * 缩放矩阵计算
 * @param {Number} x 平移距离
 * @param {Number} y default:x
 * @returns 
 */
function translate(x, y=x) {
    return [
        1, 0, x,
        0, 1, y,
        0, 0, 1
    ];
}

/**
 * 输入角度计算旋转矩阵
 * @param {Number} a 旋转角度
 * @returns 
 */
function rotate(a) {
    if (a && a.endsWith('deg')){
        a = parseFloat(a)*Math.PI/180
    }
    return [
        Math.cos(a), -Math.sin(a),0,
        Math.sin(a), Math.cos(a), 0,
        0, 0, 1
    ];
}

/**
 * X轴旋转矩阵
 * @param {Number} a 旋转角度
 * @returns 
 */
function rotateX(a) {
    if (a && a.endsWith('deg')){
        a = parseFloat(a)*Math.PI/180
    }
    return [
        1, 0, 0,
        0, Math.cos(a), -Math.sin(a),
        0, Math.sin(a), Math.cos(a)
    ];
}

/**
 * Y轴旋转矩阵
 * @param {Number} a 旋转角度
 * @returns 
 */
function rotateY(a) {
    if (a && a.endsWith('deg')){
        a = parseFloat(a)*Math.PI/180
    }
    return [
        Math.cos(a), 0, Math.sin(a), 
        0, 1, 0, 
        -Math.sin(a), 0, Math.cos(a), 
    ];
}

/**
 * 将矩阵数组转换为css矩阵字符串
 * @param {Array} array 
 * @returns {string} str
 */
function mtrToCss(array) {
    array = [array[0], array[3], array[1], array[4], array[2], array[5]]
    return "matrix(" + array.join(',') + ")";
}
