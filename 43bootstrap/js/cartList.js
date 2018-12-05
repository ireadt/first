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


function displaySelectedTotal() {
    //获取总数相关节点,并设置对应值
    let cartData=cart.getDataFromLocalStorage();
    
    let units = document.querySelector('[data-name="units"]');
    units.textContent = cartData.units;

    let selectedQty = document.querySelector('[data-name="selectedQty"]');
    selectedQty.textContent = cart.getselectedQty();

    SelectedAmount = document.querySelector('[data-name="SelectedAmount"]');
    SelectedAmount.textContent = (cart.getSelectedAmount()).toFixed(2);

}

function regEvent(){
    let element=document.querySelector('[data-operator="clearAll"]');
    console.log(element);

    element.onclick=clearAllEventFun;

    element=document.querySelectorAll('[data-operator="deleteItem"]');
    console.log(element);
    for(const i in element){
        element[i].onclick=deleteItemEventFun;
    }
}

function clearAllEventFun(){
    cart.clearShoppingCart();
    let cartListNode=document.querySelector('#cartList');

    let exmapleNode=(document.querySelector('#orderExample')).cloneNode(true);
    
    cartListNode.innerHTML = "";
    cartListNode.appendChild(exmapleNode);
    displaySelectedTotal();
}

function deleteItemEventFun(){
    console.log("删除");


    let cartListNode=document.querySelector('#cartList');

    console.log(cartListNode.childNodes);


    let bbb=this.parentNode;
    console.log(bbb);
    let qqq=bbb.id;
    for(const i in cartListNode.childNodes){
        if(i.id==qqq)
        cartListNode.removeChild(cartListNode.childNodes[i]);
    }
}
function init(){
    displayOrderList();
    displaySelectedTotal();
    regEvent();
}
init();
