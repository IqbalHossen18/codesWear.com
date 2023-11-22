import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { FaWindowClose, FaBars } from "react-icons/fa";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { IoBagCheckOutline , IoCartOutline  } from "react-icons/io5";

const Navbar = (props) => {
    const {addToCart , clearCart , toggleCartBar, cartref, removecartItem , cart, subtotal} = props;
    let pathname = usePathname()
    const [menuonoff, setmenuonoff] = useState(true)
    const ref = useRef()

    const togglebar = () => {
        setmenuonoff(!menuonoff)
        if (ref.current.classList.contains('displaynone')) {
            ref.current.classList.remove('displaynone')
            ref.current.classList.add('displayvisible')
        }
        else if (!ref.current.classList.contains('displaynone')) {
            ref.current.classList.remove('displayvisible')
            ref.current.classList.add('displaynone')
        }
    }

    const totalQuantity = Object.values(cart).reduce((total, item) => total + item.qty, 0);
    return (
        <>
            <div id='nav' className='p-2 sticky top-0 bg-white z-50 shadow-md'>
                <div className="logo-div">
                    <Link onClick={togglebar} className='cursor-pointer' href={'/'}><Image src='/logo.png' alt='img' height={250} width={150} /></Link>
                </div>
                <div ref={ref} className=" navList displaynone">
                    <ul>
                        <style jsx>
                            {
                                `
                                .active{
                                    border-bottom:2px solid black;
                                }
                                `
                            }
                        </style>
                        <Link onClick={togglebar} className='cursor-pointer' href={'/tshirt'}><li className={pathname === '/tshirt' ? 'active' : ''}>Tshirts</li></Link>
                        <Link onClick={togglebar} className='cursor-pointer' href={'/hoodies'}><li className={pathname === '/hoodies' ? 'active' : ''}>Hoodeis</li></Link>
                        <Link onClick={togglebar} className='cursor-pointer' href={'/mugs'}><li className={pathname === '/mugs' ? 'active' : ''}>Mugs</li></Link>
                        <Link onClick={togglebar} className='cursor-pointer' href={'/stickers'}><li className={pathname === '/stickers' ? 'active' : ''}>Stickers</li></Link>
                        <Link onClick={togglebar} className='cursor-pointer' href={'/about'}><li className={pathname === '/about' ? 'active' : ''}>About</li></Link>
                        <Link onClick={togglebar} className='cursor-pointer' href={'/contact'}><li className={pathname === '/contact' ? 'active' : ''}>Contact</li></Link>
                        <Link onClick={togglebar} className='cursor-pointer' href={'/order'}><li className={pathname === '/order' ? 'active' : ''}>Order</li></Link>
                        <Link onClick={togglebar} className='cursor-pointer' href={'/login'}><li className={pathname === '/login' ? 'active' : ''}>Login</li></Link>
                      
                        <li>                            
                             <div className="flex flex-row" >
                                <IoCartOutline  onClick={toggleCartBar} className='cartopen' />
                                <span className="cartindex">
                                    {totalQuantity}
                                </span>
                            </div>
                        </li>

                    </ul>
                </div>
                <div onClick={togglebar} className='menubar'>
                    {menuonoff ? <FaBars /> : <FaWindowClose />}
                </div>
            </div>
            <div ref={cartref} className=" top-[-110vh] cartbar">
                <div className="carthead">
                    <h2>Shopping Cart</h2>
                    <label htmlFor="carticon">

                        <FaWindowClose onClick={toggleCartBar} className='cartclose' />
                    </label>
                </div>
                <div className="cartitem">
                    {Object.keys(cart).length === 0 && <p className='py-3 text-center'>Your cart is Empty!</p>}
                    { Object.keys(cart).map((k)=>{
                        return <div className="cartlist" key={k}>
                        <div className="cartimg">
                            <Image width={200} height={200} src='/tshirts.jpg' alt='tshirt' />
                        </div>
                        <div className="carttext">
                            <span>
                                {cart[k].Name}
                            </span>
                            <p className='text-slate-600'>Size : {cart[k].size}</p>
                        </div>
                        <div className="cartstate">
                            <FaCircleMinus onClick={()=>{removecartItem(k, 1 , cart[k].price,  cart[k].Name , cart[k].size , cart[k].varient) }} /><span>{cart[k].qty}</span><FaCirclePlus onClick={()=>{addToCart(k, 1 , cart[k].price,  cart[k].Name , cart[k].size , cart[k].varient) }} />
                        </div>
                    </div>
                    })}
                  
                    <div className="cartbtn">
                        <div className="carttotal">
                            <span>Subtotal : {subtotal} BDT</span>
                        </div>
                        <div className='btns'>
                            <Link href={'/checkout'} >
                            <button disabled={Object.keys(cart).length === 0} onClick={toggleCartBar} className='bg-pink-500 mr-1 hover:bg-pink-600'><IoBagCheckOutline className='mr-1' /><span>Checkout</span></button>
                            </Link>
                            <button onClick={()=>{clearCart() ; toggleCartBar();}} className='bg-pink-500 ml-1 hover:bg-pink-600'>Clear</button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar