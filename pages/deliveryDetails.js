import Navbar from "@/components/navbar";
function Deliverydetails(){  
    function getTotal(){
        var total = 0;
        var cartItems = JSON.parse(localStorage.getItem("items"))
        cartItems.map(item=>{
            total = total+item.total;
        })

        return total;
    }

    return(
        <>
        <Navbar/>
        <div>
              <div className="contentBox">
                <p>Delivery Type</p>
                <div className="d-flex justify-content-between">
                    <div><input type="checkbox" style={{marginRight:8}}/>Store Pickup</div>
                    <div><input type="checkbox" style={{marginRight:8}}/>Home Delivery</div>
                </div>

                <p>Having a coupon code ? 😂</p>
                <input className="inputFrm" type="text" placeholder="Enter Coupon code Here"/>
                <br/>
                <b>Price Details</b>
                <div className="d-flex justify-content-between">
                    <div>Regular Price</div>
                    <div><b>TK. {getTotal()}</b></div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>Delivery</div>
                    <div>TK. 200</div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>Discount</div>
                    <div>TK. 900</div>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                    <div>Grand Total</div>
                    <div><h3>TK. {getTotal()- 200 - 900}</h3></div>
                </div>


                <br/>

                <h3>Delivery Details</h3>
                <small>Name</small>
                <input className="inputFrm" type="text" placeholder="Enter Your Name"/>
                
                <small>Phone Number</small>
                <input className="inputFrm" type="text" placeholder="Ex. 0190000000"/>

                <small>Email (Optional)</small>
                <input className="inputFrm" type="text" placeholder="Enter Your Email"/>
              
                <small>District</small>
                <select className="inputFrm">
                    <option>Select any</option>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                </select>

                <small>Thana</small>
                <select className="inputFrm">
                    <option>Select any</option>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                </select>

                <small>Address</small>
                <input className="inputFrm"/>

                <small>Pay With</small>
                <div className="d-flex justify-content-between">
                    <div className="card w-25">
                        <img src="/icon/bkash.jpg"/>
                    </div>
                    <div className="card w-25">
                        <img src="/icon/visa.png"/>
                    </div>
                    <div className="card w-25 p-2">
                        <p>
                        Other <i className="fa fa-arrow-right"></i>
                        </p>
                    </div>
                </div>


                <button onClick={()=>{
                 setSuccessModal(true)
                }} className="cartBtn mt-5 w-100">Checkout</button>

              </div>
        </div>
        </>
    )
}

export default Deliverydetails