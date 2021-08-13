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

var drop = `<path d="m48.243 163.98a39.741 206.89 0 0 1-48.243 0.98344l23.998-164.91z" fill="#00a1eb" fill-opacity=".91626" opacity=".9" stroke-width="1.331" />`
