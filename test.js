var timer;
//设计定时器变量
function startTimer(speed) {
    //启动定时器函数定义--为了控制速度而设计
    timer = window.setInterval(changeNum, speed);
}
//调节定时器，使程序一开始就执行变化
startTimer(100);


var h2Ojb = document.querySelector('h2');
//获取h2元素
console.log(h2Ojb);

var currentNo = 0;
//设置当前变化的号码变量及初值

var flag = true;
function changeNum() {
//定义变化数字函数，0-->9,到达9后变化到0

    if (currentNo < 9) currentNo++;
    else currentNo = 0;
    h2Ojb.innerHTML ='<img src="images/0'+currentNo+'.jpg" alt=""></img>';
}
//console.log(timer);

var btnOjb = document.getElementById('btnOjb')
//获取控制按钮
//console.log(btnObj);

function startChange(){
//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
    startTimer(500);
    btnOjb.textContent='停止';
}

//定义停止定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function stopChange(){
    window.clearInterval(timer);
    btnOjb.textContent='启动';
}
//为按钮添加鼠标移入移出事件
btnOjb.addEventListener('mouseover',stopChange);
btnOjb.addEventListener('mouseout',startChange);