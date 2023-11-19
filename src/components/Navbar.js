import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { FaShoppingCart, FaWindowClose, FaBars  } from "react-icons/fa";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";

const Navbar = () => {
  const ref = useRef()
  const cartref = useRef()
  const togglebar=()=>{
     if(ref.current.classList.contains('displaynone')){
      ref.current.classList.remove('displaynone')
      ref.current.classList.add('displayvisible')
     }
     else if(!ref.current.classList.contains('displaynone')){
      ref.current.classList.remove('displayvisible')
      ref.current.classList.add('displaynone')
     }
  }
  const toggleCartBar = () => {
    const cartClassList = cartref.current.classList;
  
    if (cartClassList.contains('top-[-110vh]')) {
      cartClassList.remove('top-[-110vh]');
      cartClassList.add('top-0');
    } else {
      // Remove the extra space in the class name
      cartClassList.remove('top-0');
      cartClassList.add('top-[-110vh]');
    }
  };
  
  return (
    <>
      <div id='nav'  className='p-2'>
        <div className="logo-div">
          <Link className='cursor-pointer' href={'/'}><Image src='/logo.png' alt='img' height={250} width={150} /></Link>
        </div>
        <div ref={ref} className=" navList displaynone">
          <ul>
            <Link onClick={togglebar} className='cursor-pointer' href={'/tshirt'}><li>Tshirts</li></Link>
            <Link onClick={togglebar} className='cursor-pointer' href={'/hoodies'}><li>Hoodeis</li></Link>
            <Link onClick={togglebar} className='cursor-pointer' href={'/mugs'}><li>Mugs</li></Link>
            <Link onClick={togglebar} className='cursor-pointer' href={'/stickers'}><li>Stickers</li></Link>
            <Link onClick={togglebar} className='cursor-pointer' href={'/about'}><li>About</li></Link>
            <Link onClick={togglebar} className='cursor-pointer' href={'/contact'}><li>Contact</li></Link>
            <Link onClick={togglebar} className='cursor-pointer' href={'/order'}><li>Order</li></Link>
          </ul>
        </div>
        <div onClick={togglebar} className='menubar'>
        <FaBars />
        </div>
      </div>
      <div ref={cartref} className=" top-[-110vh] cartbar">
          <div className="carthead">
            <h2>Shopping Cart</h2>
            <label htmlFor="carticon">
             <FaShoppingCart onClick={toggleCartBar} className='cartopen'/>
             <FaWindowClose onClick={toggleCartBar} className='cartclose'/>
            </label>
          </div>
                        <div className="cartitem">
                           <div className="cartlist">
                                <div className="cartimg">
                                    <img src='tshirts.jpg' alt='tshirt'/>
                                </div>
                                <div className="carttext">
                                    <span>
                                    Wings Of Freedom Attack On Titan Tshirt (XL/Bottlegreen)
                                    </span>
                                </div>
                                <div className="cartstate">
                                    <FaCircleMinus/><span>1</span><FaCirclePlus/>
                                </div>
                           </div>
                           <div className="cartlist">
                                <div className="cartimg">
                                    <img src='tshirts.jpg' alt='tshirt'/>
                                </div>
                                <div className="carttext">
                                    <span>
                                    Wings  (XL/Bottlegreen)
                                    </span>
                                </div>
                                <div className="cartstate">
                                    <FaCircleMinus/><span>1</span><FaCirclePlus/>
                                </div>
                           </div>
                           <div className="cartlist">
                                <div className="cartimg">
                                    <img src='tshirts.jpg' alt='tshirt'/>
                                </div>
                                <div className="carttext">
                                    <span>
                                    Wings Of Freedom Attack (XL/Bottlegreen)
                                    </span>
                                </div>
                                <div className="cartstate">
                                    <FaCircleMinus/><span>1</span><FaCirclePlus/>
                                </div>
                           </div>
                           <div className="cartlist">
                                <div className="cartimg">
                                    <img src='tshirts.jpg' alt='tshirt'/>
                                </div>
                                <div className="carttext">
                                    <span>
                                    Wings Of Freedom Attack (XL/Bottlegreen)
                                    </span>
                                </div>
                                <div className="cartstate">
                                    <FaCircleMinus/><span>1</span><FaCirclePlus/>
                                </div>
                           </div>
                           <div className="cartlist">
                                <div className="cartimg">
                                    <img src='tshirts.jpg' alt='tshirt'/>
                                </div>
                                <div className="carttext">
                                    <span>
                                    Wings Of Freedom Attack On Titan Tshirt (XL/Bottlegreen)
                                    </span>
                                </div>
                                <div className="cartstate">
                                    <FaCircleMinus/><span>1</span><FaCirclePlus/>
                                </div>
                           </div>
                           <div className="cartlist">
                                <div className="cartimg">
                                    <img src='tshirts.jpg' alt='tshirt'/>
                                </div>
                                <div className="carttext">
                                    <span>
                                    Wings Of Freedom Attack On Titan Tshirt (XL/Bottlegreen)
                                    </span>
                                </div>
                                <div className="cartstate">
                                    <FaCircleMinus/><span>1</span><FaCirclePlus/>
                                </div>
                           </div>
                           <div className="cartlist">
                                <div className="cartimg">
                                    <img src='tshirts.jpg' alt='tshirt'/>
                                </div>
                                <div className="carttext">
                                    <span>
                                    Wings Of Freedom Attack On Titan Tshirt (XL/Bottlegreen)
                                    </span>
                                </div>
                                <div className="cartstate">
                                    <FaCircleMinus/><span>1</span><FaCirclePlus/>
                                </div>
                           </div>
                           <div className="cartlist">
                                <div className="cartimg">
                                    <img src='tshirts.jpg' alt='tshirt'/>
                                </div>
                                <div className="carttext">
                                    <span>
                                    Wings Of Freedom Attack On Titan Tshirt (XL/Bottlegreen)
                                    </span>
                                </div>
                                <div className="cartstate">
                                    <FaCircleMinus/><span>1</span><FaCirclePlus/>
                                </div>
                           </div>
                           <div className="cartlist">
                                <div className="cartimg">
                                    <img src='tshirts.jpg' alt='tshirt'/>
                                </div>
                                <div className="carttext">
                                    <span>
                                    Wings Of Freedom Attack On Titan Tshirt (XL/Bottlegreen)
                                    </span>
                                </div>
                                <div className="cartstate">
                                    <FaCircleMinus/><span>1</span><FaCirclePlus/>
                                </div>
                           </div>
                           
                        </div>
          <div className="cartbtn">
              <Link  href={'/order'}><button className='bg-pink-500'><IoBagCheckOutline className='mr-1'/><span>Checkout</span></button></Link>
          </div>
      </div>
    </>
  )
}

export default Navbar