document.addEventListener('DOMContentLoaded',function(){
    var bigRound = document.querySelector('.big')
    var smallRound = document.querySelector('.small')
    smallRound.addEventListener('click',(e)=>{
        var deg = Math.ceil(Math.random()*5 + 2)*360;
        var d = 0
        var round = null
        function rota() {
            if (round){
                clearTimeout(round)
                round = null
            }
            if(d >= deg){
                return
            }
            d += 10;
            round = setTimeout(function () {
                bigRound.style.transformOrigin = '50% 50%';
                bigRound.style.transform = mtrToCss(rotate(d + 'deg'))
                rota()
            }, 15)
        }
        rota()
    })
})