
/**
 * 矩阵乘法
 * @param {Array} matrixA 
 * @param {Array} matrixB 
 * @returns 
 */
function mtrMultMtr(matrixA, matrixB) {
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
    return res;
}

/**
 * 缩放矩阵计算
 * @param {Number} x 缩放系数
 * @param {Number} y 
 * @param {Number} z 
 * @returns 
 */
function scale(x, y, z) {
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
 * @param {Number} y 
 * @param {Number} z 
 * @returns 
 */
function translate(x, y, z) {
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
 * @param {Number} y 
 * @param {Number} z
 * @returns 
 */
function rotate(x, y, z) {
    let mixMatrix =  mtrMultMtr( rotateX(x), rotateY(y));
    return  mtrMultMtr( mixMatrix, rotateZ(z));
}

/**
 * X轴旋转矩阵
 * @param {Number} a 旋转角度
 * @returns 
 */
function rotateX(a) {
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
function rotateY(a) {

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
function rotateZ(a) {
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
function matrixArrayToCssMatrix(array) {
    return "matrix3d(" + array.join(',') + ")";
}
