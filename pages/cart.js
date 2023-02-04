import Navbar from "@/components/navbar";
import { Main } from "next/document";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function Cart(){
    const router = useRouter()
    const [cartItem,setCartItems] = useState([])
    const [update,setUpdate] = useState(0)
    const [isCartempty,setisCartempty] = useState(true)

    useEffect(()=>{
       var items = JSON.parse(localStorage.getItem("items"));
       if(items.length != 0){
        setCartItems(items);
        setisCartempty(false)
       } else {
        setisCartempty(true)
       } 
    },[update])

    function removeFromCart(index){
        var items = JSON.parse(localStorage.getItem("items"));
        items.splice(index,1)
        localStorage.setItem("items",JSON.stringify(items));
        setUpdate(update+1);
    }


    
    function updateCart(index, i, action) {

        if(action == 'increment'){
            i++;
            var items = JSON.parse(localStorage.getItem("items"));
            items[index].quantity = i;
            localStorage.setItem("items", JSON.stringify(items));
        } else {
            i--;
            if (i < 1) {
            i = 1;
            }
            var items = JSON.parse(localStorage.getItem("items"));
            items[index].quantity = i;
            localStorage.setItem("items", JSON.stringify(items));
        }
        
        setUpdate(update+1)
    }
    return(
        <>
        <Head>
            <title>Cart Page | Banglalink</title>
        </Head>
        <body>
            <Navbar/>

            {isCartempty ? 
            <div>
                <h1>Your cart is empty</h1>
            </div> : 
            <>
            {cartItem.map((item,index)=>(
                <div className="cartBox">
                    <div className="d-flex">
                        <div><img src={item.image} width="150" height="100%"/></div>
                        <div className="p-2">
                            <small>{item.name}</small><br/>
                            <small>{item.price}</small><br/>

                            <div className="d-flex justify-content-between">
                                <div>
                                    <button onClick={()=>{
                                        updateCart(index, item.quantity, 'decrement') 
                                    }} className="plusMinusBtn">-</button>
                                    <small className="plusMinusBtn p-2 bg-light">{item.quantity}</small>
                                    <button onClick={()=>{
                                        updateCart(index, item.quantity, 'increment') 
                                    }} className="plusMinusBtn">+</button>
                                </div>
                                <div className="p-2">
                                <i onClick={()=>{
                                    removeFromCart(index)
                                }} className="fa fa-trash" type="button"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div style={{margin:15}}>
            <button onClick={()=>{
              router.push('/deliveryDetails')
            }} className="cartBtn">Continue</button>
            </div>


            </>}
        </body>
        </>
    )
}
export default Cart;