var TestAjax;

var ajax=new XMLHttpRequest();
ajax.open('GET','TestAjax.json');
ajax.responseType='json';

request.onload=function(){
    if(ajax.status===200){
        TestAjax=ajax.response;
        initialize();
    }else{
        console.log('网络请求TestAjax 失败，响应信息'+ajax.status+':'+ajax.statusText)
    }
};

ajax.send();