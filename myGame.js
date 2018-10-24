var randomNumber = Math.floor((Math.random()*101));
console.log(randomNumber);


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
    //var x=Number('123');
    var userGuess=Number(guessField.value);
    //console.log(typeof userGuess);
    //console.log(userGuess);
    //guesses.innerHTML = guessField.value+"";
    //document.write('我是函数体')


    //checkGuess();
    //checkGuess("abc","def");
    //checkGuess(1,"2");
    if(guessCount === 1){
        guesses.textContent='上次猜的次数：';
    }
    guesses.textContent +=userGuess+'';

    if(userGuess ===randomNumber){
        lastResult.textContent='恭喜你！猜对了！';
        lastResult.style.backgroundColor='green';
        lowOrHi.textContent='';
        setGameOver();
    }else if(guessCount ==10){
        lastResult.textContent='GAME OVER!!';
        lowOrHi.textContent='';
        setGameOver();
    }else{
        lastResult.textContent='你猜错了！';
        lastResult.style.backgroundColor='red';
        if(userGuess < randomNumber){
            lowOrHi.textContent='你刚才猜低了！';
        }else if(userGuess > randomNumber){
            lowOrHi.textContent='你刚才猜高了！';
        }
    }
    guessCount++;
    guessField.value='';
    guessField.focus();
}
guessSubmit.addEventListener('click',checkGuess);
//设置游戏结束状态

function setGameOver() {
    //禁用文本输入框
    guessField.disabled = true;
    //禁用确定按钮
    guessSubmit.disabled = true;
    //创建button元素，button为HTML按钮的标签名
    resetButton = document.createElement('button');
    //为新生成的元素resetButton设置文本内容
    resetButton.textContent = '重新开始游戏';
    //将resetButton作为body的小孩加入页面
    document.body.appendChild(resetButton);
    //为resetButton设置单击事件侦听器
    resetButton.addEventListener('click', resetGame);
    //重置游戏，在单击重新开始按钮时被调节
  }
  function resetGame() {
    //重置游戏次数
    guessCount = 1;
    //获取结论区所有的元素
    var resetParas = document.querySelectorAll('.resultParas p');
    //使用循环将所有的结论区的p元素文本内容重置空串
    for(var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
    //通过resetButton的父元素移除resetButton（重新开始游戏按钮）
    resetButton.parentNode.removeChild(resetButton);
    //设置文本输入框状态为可用
    guessField.disabled = false;
    //设置确定按钮状态为可用
    guessSubmit.disabled = false;
    //清空文本输入框内容
    guessField.value = '';
    //使文本获得焦点
    guessField.focus();
    //设置结论区背景为白色
    lastResult.style.backgroundColor = 'white';
    //重置猜数值
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }



