let colorChangerBtn = document.querySelector('#color-changer-btn');
let colorCode = document.querySelector('#color-code');
let body= document.querySelector('body')
let randomInt = (max,min)=>Math.floor(Math.random()*(max-min+1)+min);
let randomColor= ()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`



colorChangerBtn.addEventListener('click',function(e){
    body.style.backgroundColor=randomColor();
    colorCode.innerHTML= randomColor();
    colorCode.classList.remove('hidden');


})
