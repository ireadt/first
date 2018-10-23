var randomNumber = Math.floor(Math.random() * 100) +1;
//console.log(randomNumber);


var guessField = document.querySelector('.guessField');
console.log(guessField);
var guesses = document.querySelector('.guesses');
console.log(guesses);
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');

var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess(){
    guesses.innerHTML = guessField.value+" ";
    lastResult.style.backgoundColor="red";
    //document.write('我是函数体')
}
//checkGuess();
//checkGuess("abc","def");
//checkGuess(1,"2");
