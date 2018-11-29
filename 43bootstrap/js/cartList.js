var cart=new ShoppingCart();
console.log(cart);
console.log(cart.getDataFromLocalStorage());

function getshoppingCart(){
    let cartData=cart.getDataFromLocalStorage();
    let orderList=cartData.orderList;
    for(const i in orderList){
        var cartContainer=document.getElementsByName('cartContainer');
        var orderExample=document.getElementById('orderExample');
    }
}
getshoppingCart();

// var cart = new ShoppingCart();
// var cartRoot = document.querySelector('#cartRoot');
// const dataNameJson = {
    // "price": "[data-name='price']",
    // "qty": "[data-name='qty']",
    // "imgSrc": '[data-name="imgSrc"]',
    // "subPrice": '[data-name="subPrice"]',
    // "selectedQty": '[data-name="selectedQty"]',
    // "selectedAmount": '[data-name="selectedAmount"]',
    // "units": '[data-name="units"]'
// };
// 
// const operatorNameJson = {
    // "checkItem": "[data-operator='checkItem']",
    // "increase": "[data-operator='increase']",
    // "decrease": "[data-operator='decrease']",
    // "deleteItem": "[data-operator='deleteItem']"
// };
// console.log(cart);


function displayOrderList(){
    let cartData=cart.getDataFromLocalStorage();
    let orderList=cartData.orderList;
    console.log(orderList);


    let cartList=document.querySelector('#cartList');
    let exmapleNode=document.querySelector('#orderExample');
    

    for(let i=0;i<orderList.length;i++){
        let order=orderList[i];
        console.log(order);

        node=exmapleNode.cloneNode(true);

        cartList.appendChild(node);

        node.id=order.id;
      let titleNode=node.querySelector('[data-name="title"]');
      titleNode.textContent=order.title;
    
      let imgNode=node.querySelector('[data-name="imgSrc"]');
      imgNode.src='images/'+order.imgSrc;
    
      let qtyNode=node.querySelector('[data-name="qty"]');
      qtyNode.textContent=order.qty;
    
      let selectNode=node.querySelector('[data-operator="checkItem"]');
      selectNode.checked=order.selectStatus;
    
      let priceNode=node.querySelector('[data-name="price"]');
      priceNode.textContent=order.price;
    
      let subPrice=node.querySelector('[data-name="subPrice"]');
      subPrice.textContent=order.qty*order.price;
        

        node.classList.remove('d-none');
    }
}
displayOrderList();


function displaySelectedTotal() {
    //获取总数相关节点,并设置对应值
    
    // let totalNode = cartRoot.querySelector(dataNameJson.units);
    // totalNode.textContent = cart.getTotalUnits();
// 
    // totalNode = cartRoot.querySelector(dataNameJson.selectedQty);
    // totalNode.textContent = cart.getSelectedQty();
// 
    // totalNode = cartRoot.querySelector(dataNameJson.selectedAmount);
    // totalNode.textContent = (cart.getSelectedAmount()).toFixed(2);

}
displaySelectedTotal();

