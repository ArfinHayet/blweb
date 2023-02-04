import { useState } from "react";

function Toast({active}){
    return(
        <>
        <div className={active ? "cusToast cusToast-active" : "cusToast"}>
           <div className="toastBody p-3">
            <div className="d-flex">
               <div className="w-25">
                  <i className="fa fa-check"></i>
               </div>
               <div className="w-75">
                  Product Added to Cart
               </div>
            </div>
           </div>
        </div>
        </>
    )
}
export default Toast;