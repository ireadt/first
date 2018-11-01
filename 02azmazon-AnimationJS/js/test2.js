//var img1= document.querySelector('#images a:nth(4)-child');
// css选择器--doucument。querySelectctor（）
//var img4=document.getElementById('images').children[4];
// ID--doucument。getElementById（）
//var img4=document.getElementsByClassName('hiddenImg')[3];
// 类名--doucument。getElementsByClassName
//var img4=document.getElementsByTagName('a')[4];
// 标签名--doucument。getElementsByTagName（）
// console.log(img4);

// img4.style.display="block";
// img0.style.display="none";




//获取一组带图像的超链接
var imagesA=document.getElementById("images").children;

//获取一组li文本
var txtList=document.querySelectorAll(".txtItem");

//行内样式实现换显示样式
//26行元素隐藏
//imagesA[0].style.display="none";
//30行元素显示
//imagesA[4].style.display="block";


//更换通过更换css类名来实现更换样式
// //26行元素隐藏
//imagesA[0].style.display="hiddenImg";
// //30行元素显示
//imagesA[4].style.display="displayImg";


//利用计时器间隔1s，显示一张图像，其余图像隐藏
var currentNo=0;
function changeImg(){
    //排他原理,先去掉同类，再突出自己
    var nodeLenght=txtList.length
    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className='hiddenImg';
        //console.log(imagesA[i]);
        txtList[i].className='txtItem normalColor'
    }

    //或者
    // for(const item of imagesA){
        // item.className='hiddenImg';
    // }

    //再突出自己
    imagesA[currentNo].className="displayImg";
    txtList[currentNo].className="txtItem normalColor";
    //换个元素，为下一次计时器调用做准备
    if(currentNo<7) {currentNo++;}
    else{
        currentNo=0;
    }
    //console.log(currentNo);
}

var timer=window.setInterval(changeImg,1000)

//鼠标移出后移出定时器
function stopChange(){
    window.clearInterval(timer);
}
//鼠标移入后重设定时器
function startChange(){
 timer = window.clearInterval(changeImg,1000);
}
//获取sliderDiv以注册移入移出事件
var sliderDiv=document.getElementById("images");
//为图像添加移入移出事件


sliderDiv.addEventListener('mouseover',stopChange);
sliderDiv.addEventListener('mouseover',function(){window.clearInterval(timer);});


sliderDiv.addEventListener('mouseover',()=>{clearInterval(timer);});
sliderDiv.addEventListener('mouseout',startChange);


//为所有文本Li注册鼠标移入事件
for(var i=0;i<txtList.length;i++){
    txtList[i].addEventListener('mouseover',gotoImg);
    //添加自定义属性no 记录当前li的编号
    txtList[i].no=i;
    //console.log(txtList[i].no);
}
//移入后，当前li高亮，跳转到对应图片
function gotoImg(){
    //获得当前显示图像的编号/文本编号 this 是当前事件发生的本体
    //console.log(this.no);
    currentNo=this.no;
    changeImg();    
}

var leftButton=document.querySelector(".leftButton");
var rightButton=document.querySelector(".rightButton");
leftButton.addEventListener('click',leftImg);
rightButton.addEventListener('click',rightImg);

function leftImg(){
    if(currentNo>0) {currentNo--;}
    else{
        currentNo=7;
    }
    changeImg();
}

function rightImg(){
    if(currentNo<7) {currentNo++;}
    else{
        currentNo=0;
    }
}

//----------------------------------


