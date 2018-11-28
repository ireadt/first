//购物车数据类,用于记录购物车数据。
//包括订单列表、总计商品数量、总计商品样本数、总价格
//订单列表项包括：某类商品、商品数量小计
//商品包括：商品id、图片、名称、单价
//商品类
class Product{
  constructor(id,title,imgSrc,price){
    //商品类成员
    this.id=id;
    this.title=title;
    this.imgSrc=imgSrc;
    this.price=price;
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
  clearCart(){
      localStorage.removeItem('Acart');
  }
  //从本地存储中获取购物车数据
  getDataFromLocalStorage(){
      let Acart=localStorage.getItem('Acart');
      if(Acart==null||Acart==''){
          return new CartData();
      }
      else{
          return JSON.parse(Acart);
      }
  }
  //将购物车数据写入本地存储中
  setDataToLocalStorage(cartData){
      localStorage.removeItem('Acart');
      localStorage.setItem('Acart',JSON.stringify(cartData));
  }
  //加入购物车（写入localStorage）
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
  getSetlectedList(){
      let cartData=this.getDataFromLocalStorage();
      let selectArray=new Array();
      let orderList=cartData.orderList;
      for(const key in orderList){
        const order=orderList[key];
        if(order.selectStatus){
          selectArray.push(order);
        }
      }
      return selectArray;
  }
  getSelectedQty(){
      let cartData = this.getDataFromLocalStorage();
      let orderList =cartData.orderList;
      let selectedQty =0;
      for(const key in orderList){
        if(orderList[key].selectStatus){
          selectedQty+=orderList[key].qty;
        }
      }
      return selectedQty;
  }
  // 获取选择商品的总价格
  getSelectedAmount(){
      let cartData = this.getDataFromLocalStorage();
      let orderList = cartData.orderList;
      let selectedAmount = 0;
      for(const key in orderList){
        if(orderList[key].selectStatus){
          selectedAmount += orderList[key].qty*orderList[key].price;
        }
      }
      return selectedAmount;
  }
  // 设置购物车订单选择状态
  setItemSelectStatus(id,selectStatus){
      // 获取购物车数据
      let cartData=this.getDataFromLocalStorage();
      let orderList=cartData.orderList;
      // 查找id对应的订单
      let order=this.find(id,orderList);
      // 判断位置，位置为空报错提示，如果不为空就设置状态
      if(order ==null){
        // 没有找到id
        console.log('订单ID有误');
      }else{
        //找到对应id
        order.selectStatus=selectStatus;
        //写入本地存储
        this.setDataToLocalStorage(cartData);
      }
  }
  //查找指定ID的订单
  find(id,orderList){
      for(const i in orderList){
        if(id==orderList[i].id){
          return orderList[i];
        }
      }
      return null;
  }
  //删除指定ID商品
  deleteItem(id){
    // 获取购物车数据
    let cartData=this.getDataFromLocalStorage();
    // 获取订单列表
    let orderList=cartData.orderList;
    // 获取指定id的订单(要删除的订单)
    let order=this.find(id,orderList);
    //定位要删除的订单在数组中的位置
    let index =orderList.indexOf(order,0);

    if(index==-1){
      // 找不到需要删除的订单
      console.log('订单id有误');
    }else{
      // 删除当前订单
      orderList.splice(index,1);
      // 变更总商品总件数
      cartData.totalQty-=order.qty;
      //变更商品总价格
      cartData.totalAmount-=order.qty*order.price;
      // 变更总商品件数
      cartData.units--;
      //数据回写购物车
      this.setDataToLocalStorage(cartData);
    }
  }
}
