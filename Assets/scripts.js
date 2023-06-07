// first goal is to connect start button
var startBtn = document.querySelector('.start-btn')
console.log(startBtn);
// then addEventlistner
startBtn.addEventListener('click',function(){
   document.getElementById('start').classList.add('hide')
   document.getElementById('quiz').classList.remove('hide')
});
// add clickEvent