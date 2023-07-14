let buffer='';
let previousSymbol='';
let screenText="";
let capsLockOn=false;
let calcOn=false;

const screen = document.getElementById('screen');
const letterButtons = document.querySelectorAll('#letter');
const spaceButton = document.getElementById('space');
const backspaceButton = document.getElementById('backspace');
const capslockButton = document.getElementById('caps-lock');
const calculatorButton = document.getElementById('calculator');



letterButtons.forEach(function(button) {
  button.addEventListener('click', displayLetter);
});

calculatorButton.addEventListener('click',function(){
  calcOn=!calcOn;
  if(calcOn===true)
    calculatorButton.style.borderColor='#F47983';
  else if(calcOn===false)
    calculatorButton.style.borderColor='#383838';
});

spaceButton.addEventListener('click',function(){
  buffer=' ';
  screenText+=buffer;
  screen.innerHTML=screenText;
});

backspaceButton.addEventListener('click',function(){
  screenText=screenText.slice(0,screenText.length-1);
  screen.innerHTML=screenText;
});

capslockButton.addEventListener('click',function(){
  capsLockOn=!capsLockOn;
  if(capsLockOn===true)
    capslockButton.style.borderColor='#F47983';
  else
    capslockButton.style.borderColor='#383838';
});

function checkCaps(string){
  if(capsLockOn===true)
    string=string.toUpperCase()
  else
    string=string.toLowerCase();
  return string;
}

function displayLetter(event) {
  previousSymbol = buffer;
  buffer = event.target.innerHTML;
  buffer=checkCaps(buffer);
  screenText += buffer;
  screen.innerHTML = screenText;
}