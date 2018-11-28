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


    

    for(let i=0;i<orderList.length;i++){
        let order=orderList[i];
        console.log(order);
    }
}
displayOrderList();