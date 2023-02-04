import Image from 'next/image';
import Link from 'next/link';
function Navbar(){
    return(
      <>
      <nav className='navbar fixed-top'>
          <Link href="/">
           <Image src="/logo.png" width="150" height="40"/>
          </Link>
          <div className='d-flex justify-content-between px-4' style={{width:'40%'}}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <div className='avatar'></div>
            <i class="fa-solid fa-bars"></i>
          </div>
      </nav>
      <div style={{height:50,width:'100%'}}></div>
      </>
    )
}  
export default Navbar;