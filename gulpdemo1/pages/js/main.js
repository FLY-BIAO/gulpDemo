var layer1 = document.querySelector("#layer1");
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
layer1.style.transform = mtrToCss(scale(.3))

const layer2 = document.querySelector("#layer2");
layer2.style.transform = 'translate(200px)'
const drop = `<path  d="m48.243 163.98a39.741 206.89 0 0 1-48.243 0.98344l23.998-164.91z" fill="#00a1eb" fill-opacity=".91626" opacity=".9" stroke-width="1.331" />`

let dropid = 0
function createDrop(){
    layer2.innerHTML += drop
    const id = dropid++
    function animation(id){
        let h = 0;
        let timer = null;
        let size = Math.random()*0.1 + 0.05
        let step = (Math.random()*5 + 5)/size
        let x = Math.random()*200/size
        function down(){
            const path = document.querySelectorAll(`#layer2 path`)[id]
            if (timer){
                clearTimeout(timer)
                timer = null
            }
            if(h > 400/size){
                size = Math.random()*0.1 + 0.05
                step = (Math.random()*5 + 3)/size
                h = -10/size
                x = Math.random()*200/size
                // return
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

for (let i = 0; i < 20; i++) {
    createDrop()
}

