"use client"
import Link from "next/link"
import { Router } from "next/router"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import { Addtocart } from "./functions/addtocart"
import Toast from "@/components/toast"
function Home(){
    const [productlist,setProductlist] = useState([
        {'name':'Samsung S 20 ultra 6/256 GB Black','regularPrice':'11,200,00','offerPrice':'23,43000'},
        {'name':'Samsung S 20 ultra 6/256 GB Black','regularPrice':'11,200,00','offerPrice':'23,43000'},
        {'name':'Samsung S 20 ultra 6/256 GB Black','regularPrice':'11,200,00','offerPrice':'23,43000'},
        {'name':'Samsung S 20 ultra 6/256 GB Black','regularPrice':'11,200,00','offerPrice':'23,43000'},
        {'name':'Samsung S 20 ultra 6/256 GB Black','regularPrice':'11,200,00','offerPrice':'23,43000'},
    ]) 

    const [imgcover,setImgcover] = useState([
        {'img':'/banners.png'},
        {'img':'/banners2.jpg'},
        {'img':'/banners3.jpg'},
        {'img':'/banners.png'},
        {'img':'/banners2.jpg'},
        {'img':'/banners3.jpg'},
    ])

    const [activeDot,setActiveDot] = useState(0)
    const [showtoast,setShowtoast] = useState(false)
    return(
        <div>
            <Navbar/>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                {imgcover.map((item,index)=>(
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} class={index == 0 ? "active" : ""} aria-current="true" aria-label="Slide 1"></button>
                ))}
            </div>
            <div class="carousel-inner">
                {imgcover.map((item,index)=>(
                  <div class={index == 0 ? "carousel-item active" : "carousel-item"}>
                    <img src={item.img} class="d-block w-100" alt="..."/>
                  </div>
                ))}
            </div>
            </div>
            

            <div class="scrollmenu">
                <a href="#home">BL e-Shop</a>
                <a href="#news">
                    <i class="fa-solid fa-fire"></i>
                    Hot Deals</a>
                <a href="#contact">Utility bill</a>
                <a href="#about">About</a>
                <a href="#support">Support</a>
                <a href="#blog">Blog</a>
                <a href="#tools">Tools</a>  
                <a href="#base">Base</a>
                <a href="#custom">Custom</a>
                <a href="#more">More</a>
                <a href="#logo">Logo</a>
                <a href="#friends">Friends</a>
                <a href="#partners">Partners</a>
                <a href="#people">People</a>
                <a href="#work">Work</a>
            </div>
            <div className="contentBox">
              <div className="d-flex justify-content-between">
                <div className="card p-2 m-2">
                    <img src="/icon/sim-card.png"/>
                    <small className="text-center">Get new Sim</small>
                </div>
                <div className="card p-2 m-2">
                    <img src="/icon/sim-card.png"/>
                    <small className="text-center">Get new Sim</small>
                </div>
                <div className="card p-2 m-2">
                    <img src="/icon/sim-card.png"/>
                    <small className="text-center">Get new Sim</small>
                </div>
              </div>
            </div>

            <div className="contentBox">
              <div className="d-flex justify-content-between">
                <div className="m-2">
                    <center>
                      <img src="/icon/basket.png" className="menuIcon"/>
                    </center>
                    <small className="text-center">My orders</small>
                </div>
                <Link href="/cart" className="lnk m-2">
                    <center>
                      <img src="/icon/basket.png" className="menuIcon"/>
                    </center>
                    <small className="text-center">Cart</small>
                </Link>
                <div className="m-2">
                    <center>
                      <img src="/icon/basket.png" className="menuIcon"/>
                    </center>
                    <small className="text-center">Saved</small>
                </div>
                <div className="m-2">
                    <center>
                      <img src="/icon/basket.png" className="menuIcon" style={{width:30,height:30}}/>
                    </center>
                    <small className="text-center">Track Order</small>
                </div>
              </div>
            </div>

            <div className="contentBox">
                <div className="d-flex justify-content-between">
                    <div>
                    <img src="/icon/mobile-app.png" style={{width:20}}/>
                    Phones</div>
                    <div>See all <i class="fa-solid fa-arrow-right"></i> </div>
                </div>
                <small style={{color:'grey'}}>Best deals , new launches, & top selling phones</small>
                <div className="slideBox">
                    {productlist.map(item=>(
                       <div className="productBox">
                            <Link href={'/products/'+encodeURIComponent(item.name)}>
                               <img src="/banners.png"/>
                            </Link>
                            <div className="p-2">
                                <small style={{color:'grey'}}>Samsung S 20 ultra 6/256 GB Black</small>
                                <br/>
                                <b>TK. 1,20,000</b>
                                <br/>
                                <small><strike>TK. 50,0000</strike></small>
                            </div>

                            <div className="cartIcon">
                                <img type="button" onClick={()=>{
                                    Addtocart(1,item.regularPrice)
                                    setShowtoast(true)
                                    setTimeout(()=>{
                                      setShowtoast(false)
                                    },1000)
                                }} src="/icon/basket.png" style={{width:40,height:40}}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="contentBox">
                <div className="d-flex justify-content-between">
                    <div>
                    <i class="fa-solid fa-fire" style={{fontSize:20}}></i>
                    Hot Deals</div>
                    <div>See all <i class="fa-solid fa-arrow-right"></i> </div>
                </div>
                <small style={{color:'grey'}}>Best deals , new launches, & top selling phones</small>
                <div className="slideBox">
                    {productlist.map(item=>(
                       <div className="productBox">
                            <img src="/banners.png"/>
                            <div className="p-2">
                                <small style={{color:'grey'}}>Samsung S 20 ultra 6/256 GB Black</small>
                                <br/>
                                <b>TK. 1,20,000</b>
                                <br/>
                                <small><strike>TK. 50,0000</strike></small>
                            </div>

                            <div className="cartIcon">
                                <img src="/icon/basket.png" style={{width:40,height:40}}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <Toast active={showtoast}/>
        </div>
    )
}
export default Home