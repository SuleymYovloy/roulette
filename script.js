var lastRotate = 0;
document.getElementsByClassName('roulette__carousel')[0].addEventListener('click',function(e){
    e.target.style.transform = 'rotate('+(lastRotate +=Math.random()*Math.PI*10)+'rad)';
    return false;
})