var obj = document.querySelector("#path96117");
var length = obj.getTotalLength();
var deg = 0
var round = null
function rota(){
    if(round)
        clearTimeout(round)
    deg = deg>360? 0: deg + 0.54;
    round = setTimeout(function(){
            var matrix = `matrix(1, ${deg}, 0,1,-100,-100)`;
            obj.style.transform = `translate(100px, 100px) rotate(${deg}deg) translate(-100px, -100px)`
            rota()
        },15) 
}
rota()