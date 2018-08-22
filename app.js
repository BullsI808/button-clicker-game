var buttons = document.getElementsByClassName('buttons');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var display = document.getElementById('result');
var score = 0;

btn1.addEventListener('click' , function(){
    score++;
    display.innerHTML = 'score:' + score;
});

btn2.addEventListener('click' , function(){
    score++;
    display.innerHTML = 'score:' + score;
    });

btn3.addEventListener('click' , function(){
    score++;
    display.innerHTML = 'score:' + score;
});