export const Addtocart = (quantity,price) => {    
    var item = {
        'name':'Samsung s20 ultra great phone',
        'quantity':quantity,
        'image':'/banners.png',
        'price':price,
        'total':price*quantity
    }
    if(localStorage.getItem("items") == null){
        var cartItems = [];
        cartItems.push(item);
        localStorage.setItem("items",JSON.stringify(cartItems));
    } else {
        var cartItems = JSON.parse(localStorage.getItem("items"))
        cartItems.push(item);
        localStorage.setItem("items",JSON.stringify(cartItems));
    } 
}