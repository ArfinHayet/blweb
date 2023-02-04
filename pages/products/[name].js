import Navbar from "@/components/navbar"
import Link from "next/link"
import { useRouter } from "next/router"
import { useReducer, useState } from "react"
import {Addtocart} from '../functions/addtocart';
function Productname(){
    const router = useRouter()
    const [successModal,setSuccessModal] = useState(false)
    const [quantity,setQuantity] = useState(1)
    const [price,setPrice] = useState(100)
    return(
        <div>
            <Navbar/>
            <div className={successModal ? 'successModal sactive' : 'successModal'}>
              <i onClick={()=>{
                window.location="/"
              }} className="fa fa-close" style={{position:'absolute',right:10,top:10,fontSize:30,cursor:'pointer'}}></i>

              <br/>
              <br/>
              <br/>
              <center>
                <img src="/icon/checked.png" width="50"/>
                <h1>Congratulations !</h1>
                <p>Sucessfully Placed Order</p>
              </center>
              
            </div>


            <div className="productMain">
                <div className="productCover">
                    <p>Home <i class="fa-solid fa-angle-right" style={{marginLeft:8,marginRight:8}}></i>
                    e-shop <i class="fa-solid fa-angle-right" style={{marginLeft:8,marginRight:8}}></i>
                    Product Details
                    </p>
                    <img src="/banners.png" style={{width:'100%',borderRadius:10}}/>
                    <div className="d-flex">
                        <img src="/banners.png" style={{width:50,borderRadius:15,margin:8}}/>
                        <img src="/banners.png" style={{width:50,borderRadius:15,margin:8}}/>
                        <img src="/banners.png" style={{width:50,borderRadius:15,margin:8}}/>
                    </div>
                </div>
                
                <div className="contentBox">
                    <h3>I phone 14 max pro-us Variant 14/1 TB Black</h3>
                    <small style={{color:'grey'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</small>
                    
                    <p>Sold By : <b>Gadget Bd Ltd.</b></p>
                    <div className="d-flex justify-content-between">
                    <p>Color</p>
                    <div></div>
                    </div>
                </div>
            </div>
            <div className="footerBar">
                <div className="d-flex">
                    <div className="p-2">

                        <div className="p-2">
                            <button onClick={()=>{
                                if(quantity<2){
                                    setQuantity(1)
                                } else {
                                    setQuantity(quantity-1)
                                }
                            }} class="plusMinusBtn bg-light">-</button>
                            <input className="plusMinusBtn bg-light" value={quantity} type="number" style={{width:40}}/>
                            <button onClick={()=>{
                                setQuantity(quantity+1)
                            }} class="plusMinusBtn">+</button>
                        </div>
                        
                    </div>
                    <div className="p-2" style={{width:'60%'}}>
                        <button onClick={()=>{
                            Addtocart(quantity,price);
                            router.push('/cart')
                        }} className="cartBtn">Continue</button>
                    </div>
                </div>
            </div>   
        </div>
    )
}
export default Productname