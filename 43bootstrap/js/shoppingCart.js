//商品类
class Product{
  constructor(id,title,price,imgSrc){
    //商品类成员
    this.id=id;
    this.title=title;
    this.price=price;
    this.imgSrc=imgSrc;
  }
}

//订单类
class Order{
  constructor(Product,qty,selectStatus){
    this.id=Product.id;
    this.title=Product.title;
    this.price=Product.price;
    this.imgSrc=Product.imgSrc;
    this.qty=qty;
    this.selectStatus=selectStatus;
  }
}

//购物车数据类,用于记录购物车数据。
//包括订单列表、总计商品数量、总计商品样本数、总价格
//订单列表项包括：某类商品、商品数量小计
//商品包括：商品id、图片、名称、单价
class CartData{
  constructor(){
    this.orderList=new Array();
    this.units=0;
    this.totalQty=0;
    this.totalAmount=0;
  }
}

//购物车操作类
class ShoppingCart{
    getDataFromLocalStorage(){
      let Acart=localStorage.getItem('Acart');
      if(Acart==null||Acart==''){
          return new CartData();
      }
      else{
          return JSON.parse(Acart);
      }
    }
    setDataToLocalStorage(cartData){
      localStorage.removeItem('Acart');
      localStorage.setItem('Acart',JSON.stringify(cartData));
    }
    getSetlectedList(){
    }
    getSelectedQty(){
      let cartData=this.getDataFromLocalStorage();
      let orderList=cartData.orderList;
      let getSelectedQty=0;
      for(const key in orderList){
        if(orderList[key].selectStatus){
          getSelectedQty+=orderList[key].qty;
        }
      }
      for(let i=0; i<orderList.length;i++){
        const element=orderList[i];
      }
      return SelectedAmount;
    }
    getSelectedAmount(){
    }

    setItemSelectStatus(id,selectStatus){
    }
    addToCart(order){
      //从本地存储中获取购物车数据
      let cartData=this.getDataFromLocalStorage();
      //获取购物车接json数据中的订单列表
      let orderList=cartData.orderList;
      //设置标志位判断是否为购物车新品，默认为新商品
      let isNewProduct=true;
      //遍历订单列表，判断新加入商品是否在购物车中
      for(let i in orderList){
        if(order.id==orderList[i].id){
        //若加入订单商品已在购物车中，则变更订单列表中对应商品数量，且变更新商品标志位
          orderList[i].qty+=order.qty;
          isNewProduct=false;
          break;
        }
      }
      //如果是新品
      if(isNewProduct){
        //购物车总样本+1
        cartData.units++;
        //导入新商品置入购物车
        orderList.push(order);
      }
      //修改购物车总金额及商品数量
      cartData.totalAmount+=order.qty*order.price;
      cartData.totalQty+=order.qty;
      //写入localStorage
      this.setDataToLocalStorage(cartData);
    }
    clearCart(){
      localStorage.removeItem('Acart');
    }
    find(id){
    }
    deleteItem(id){
    }
    changeQty(id,op){
    }
}

// function addToCart(order){
    // var flag=true;
    // for(var i=0;i<myCart.orderList.length;i++){
    // if(order.id==myCart.orderList[i].id){ 
      // flag=false;
      //新增对应qty
      // myCart.orderList[i].qty+=order.qty;
      // break;
    // }
  // }
  // if(flag){
    // myCart.orderList.push(order);
    // myCart.units++;
  // }
  // myCart.totalQty+=order.qty;
  // myCart.totalAmount+=order.price*order.qty;
// }

//商品对象/实例
// var Product1=new Product('1号','电脑',9999.00,'images/01.jpg');
// var Product2=new Product('2号','手机',6999.00,'images/02.jpg');
// var product1=new Product('01','面膜',9.5,'images/01.jpg');
// var product2=new Product('02','书',13,'images/02.jpg');

//实例化购物车数据---订单1进购物车
// var myCart=new CartData();
// 创建订单对象
// var order=new Order(Product1,5);
// addToCart(order);
// myCart.orderList.push(order);
// myCart.units=1;
// myCart.totaLQty=order.qty;
// myCart.totalAmount=order.price*order.qty;
// 
// 订单2进购物车
// order=new Order(Product2,3);
// addToCart(order);//调用加入购物车函数
// 
// order=new Order(Product2,1);
// addToCart(order);
// 
// var x=10;
// var y=5;
// 
// localStorage.setItem('kx',x);
// var xfromS=localStorage.getItem('kx');
// console.log(xfromS*y);
// console.log(parseInt(xfromS)+y);
// console.log(parseFloat(xfromS)+y);
// 
// localStorage.setItem('p01',JSON.stringify(Product1));
// var pfromS=JSON.parse(localStorage.getItem('p01'));
// console.log(pfromS);
// 
// console.log(Product);
// console.log(order);
// console.log(myCart);