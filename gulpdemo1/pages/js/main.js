var sun = document.querySelector("#path96117");

var deg = 0
var round = null
function rota() {
    if (round){
        clearTimeout(round)
        round = null
    }
    deg = deg > 360 ? 0 : deg + 0.54;
    round = setTimeout(function () {
        sun.style.transformOrigin = '100px 100px';
        sun.style.transform = mtrToCss(rotate(deg + 'deg'))
        rota()
    }, 15)
}
rota()

var layer2 = document.querySelector("#layer2");
layer2.style.transform = 'translate(200px)'
var drop = `<path  d="m48.243 163.98a39.741 206.89 0 0 1-48.243 0.98344l23.998-164.91z" fill="#00a1eb" fill-opacity=".91626" opacity=".9" stroke-width="1.331" />`
// var drop = document.querySelector("#layer2 path");

// var h = 0
// var d = null
// function down(){
//     if (d){
//         clearTimeout(d)
//         d = null
//     }
//     let size = 0.15
//     let step = (Math.random()*5 + 3)/size
//     h = h > 400/size ? -100 : h + step;
//     d = setTimeout(function () {
//         // console.log(h)
//         drop.style.transform = mtrToCss(mtrMult(scale(size), translate(20,h)))
//         down()
//     }, 15)
// }
// down()
let dropid = 0
function createDrop(){
    layer2.innerHTML += `<path id='dropid${++dropid}' d="m48.243 163.98a39.741 206.89 0 0 1-48.243 0.98344l23.998-164.91z" fill="#00a1eb" fill-opacity=".91626" opacity=".9" stroke-width="1.331" />`
    const id = dropid
    function animation(id){
        let h = 0;
        let timer = null;
        let size = Math.random()*0.1 + 0.05
        let step = (Math.random()*5 + 3)/size
        let x = Math.random()*200/size
        function down(){
            const path = document.querySelector(`#dropid${id}`)
            if (timer){
                clearTimeout(timer)
                timer = null
            }
            if(h > 400/size){
                h = -10/size
                x = Math.random()*200/size
            }
            h = h + step;
            timer = setTimeout(function () {
                path.style.transform = mtrToCss(mtrMult(scale(size), translate(x,h)))
                down()
            }, 15)
        }
        down()
    }
    return animation(id)
}
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
createDrop()
