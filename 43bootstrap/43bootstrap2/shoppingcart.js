localStorage.setItem("key","value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量


class Product{
    constructor(id,title,imgSrc,price){
        this.id=id;
        this.title=title;
        this.imgSrc=imgSrc;
        this.price=price;
    }
}


class Order{
    constructor(product,qty,selectStatus){
        this.id=product.id;
        this.title=product.title;
        this.imgSrc=product.imgSrc;
        this.price=product.price;
        this.qty=qty;
        this.selectStatus=selectStatus;
    }
}

class CartData{
    constructor(){
        this.orderList=new Array();
        this.totalQty=0;
        this.totalAmount=0;
        this.units=0;             //总样本数

    }
}

//购物车操作
class ShoppingCart{

    //从本地存储中获取购物车数据
    getDataFromLocalStorage(){

        let lzzyCart=localStorage.getItem('lzzyCart');
        //判断购物车是否为空
        if(lzzyCart==null||lzzyCart==''){
            return new CartData();
        }

        else{
            return JSON.parse(lzzyCart);
        }
        // return localStorage.getItem('test');

    }

//将购物车数据写入本地存储中
    setDataToLocalStorage(cartData){

        // var cartDataString=JSON.stringify(cartData);
        // localStorage.setItem('test',cartDataString);

        // localStorage.setItem('test',JSON.stringify(cartDate));

        localStorage.removeItem('lzzyCart');
        localStorage.setItem('lzzyCart',JSON.stringify(cartData));
       
    }

  //将订单添加到购物车
    addToCart(order){
        //从本地存储中获取购物车的数据
        let cartData=this.getDataFromLocalStorage();
        //
        let orderList=cartData.orderList;
        //判断购物车新商品，默认为新商品
        let isNewProduct=true;

        //遍历订单列表，判断新加入的商品原来是否在购物车中
        for(let i in orderList){
            if(order.id==orderList[i].id){
                orderList[i].qty+=order.qty;
            isNewProduct=false;
            break;
            }
        }

        if(isNewProduct){
            cartData.units++;
            orderList.push(order);
        }
        cartData.totalAmount+=order.qty*order.price;
        cartData.totalQty+=order.qty;

        this.setDataToLocalStorage(cartData);
    }

    //清空
    clearCart(){
        localStorage.clear();
        localStorage.removeItem('lzzyCart');
    }

//获取购物车中的订单列表
// getSelectedList(){

// }

//获取商品的总数量
getSelectedQty(){

    //从本地存储中获取购物车的数据
    let cartData=this.getDataFromLocalStorage();
    //定义一个变量存储订单列表
    let orderList=cartData.orderList;
   
    let selectedQty=0;
    for(let i in orderList){
        if(orderList[i].selectStatus){
            selectedQty+=orderList[i].qty;
        }
    }
    return selectedQty;
}


//获取商品的总价格
    getSelectedAmount(){
    //从本地存储中获取购物车的数据
    let cartData=this.getDataFromLocalStorage();
   //定义一个变量存储订单列表
    let orderList=cartData.orderList;
   
    let selectedAmount=0;
        for(let i in orderList){
            if(orderList[i].selectStatus){
                selectedAmount+=orderList[i].qty*orderList[i].price;
            }
        }
        return selectedAmount;
    }

    //设置购物车订单项选择状态
    setItemSelectStatus(id,selectStatus){
          //从本地存储中获取购物车的数据
    let cartData=this.getDataFromLocalStorage();
    //定义一个变量存储订单列表
     let orderList=cartData.orderList;
     

     for(let i in orderList){
         if(orderList[i].id=id){
           orderList[i].selectStatus=selectStatus;
           break;
         }
     }
    }




}