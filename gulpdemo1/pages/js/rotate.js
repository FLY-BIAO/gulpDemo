document.addEventListener('DOMContentLoaded',function(){
    var bigRound = document.querySelector('.big')
    var smallRound = document.querySelector('.small')
    var d = 0
    smallRound.addEventListener('click',(e)=>{
        var deg = (Math.random()*5 + 2)*360;
        var round = null
        function rota() {
            if (round){
                clearTimeout(round)
                round = null
            }
            d = d? d:10
            let dif = deg - d
            if(dif <=0.01 ){
                return
            }else if(d<=360){
                d += d/36
            }
            else if(dif<=360){
                d += (dif)/36
            }else{
                d += 10;
            }
            round = setTimeout(function () {
                bigRound.style.transformOrigin = '50% 50%';
                bigRound.style.transform = mtrToCss(rotate(d + 'deg'))
                rota()
            }, 15)
        }
        rota()
    })
})