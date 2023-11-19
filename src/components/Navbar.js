import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { FaShoppingCart, FaWindowClose, FaBars } from "react-icons/fa";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";

const Navbar = () => {
    let pathname = usePathname()
    const [menuonoff, setmenuonoff] = useState(true)
    const ref = useRef()
    const cartref = useRef()
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
            <div id='nav' className='p-2'>
                <div className="logo-div">
                    <Link className='cursor-pointer' href={'/'}><Image src='/logo.png' alt='img' height={250} width={150} /></Link>
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
                        <li>  <FaShoppingCart onClick={toggleCartBar} className='cartopen' /></li>
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
                    <div className="cartlist">
                        <div className="cartimg">
                            <Image width={200} height={200} src='/tshirts.jpg' alt='tshirt' />
                        </div>
                        <div className="carttext">
                            <span>
                                Wings Of Freedom Attack On Titan Tshirt (XL/Bottlegreen)
                            </span>
                        </div>
                        <div className="cartstate">
                            <FaCircleMinus /><span>1</span><FaCirclePlus />
                        </div>
                    </div>
                    <div className="cartlist">
                        <div className="cartimg">
                            <Image width={200} height={200} src='/tshirts.jpg' alt='tshirt' />
                        </div>
                        <div className="carttext">
                            <span>
                                Wings  (XL/Bottlegreen)
                            </span>
                        </div>
                        <div className="cartstate">
                            <FaCircleMinus /><span>1</span><FaCirclePlus />
                        </div>
                    </div>
                    <div className="cartlist">
                        <div className="cartimg">
                            <Image width={200} height={200} src='/tshirts.jpg' alt='tshirt' />
                        </div>
                        <div className="carttext">
                            <span>
                                Wings Of Freedom Attack (XL/Bottlegreen)
                            </span>
                        </div>
                        <div className="cartstate">
                            <FaCircleMinus /><span>1</span><FaCirclePlus />
                        </div>
                    </div>
                    <div className="cartlist">
                        <div className="cartimg">
                            <Image width={200} height={200} src='/tshirts.jpg' alt='tshirt' />
                        </div>
                        <div className="carttext">
                            <span>
                                Wings Of Freedom Attack (XL/Bottlegreen)
                            </span>
                        </div>
                        <div className="cartstate">
                            <FaCircleMinus /><span>1</span><FaCirclePlus />
                        </div>
                    </div>
                    <div className="cartlist">
                        <div className="cartimg">
                            <Image width={200} height={200} src='/tshirts.jpg' alt='tshirt' />
                        </div>
                        <div className="carttext">
                            <span>
                                Wings Of Freedom Attack (XL/Bottlegreen)
                            </span>
                        </div>
                        <div className="cartstate">
                            <FaCircleMinus /><span>1</span><FaCirclePlus />
                        </div>
                    </div>
                    <div className="cartlist">
                        <div className="cartimg">
                            <Image width={200} height={200} src='/tshirts.jpg' alt='tshirt' />
                        </div>
                        <div className="carttext">
                            <span>
                                Wings Of Freedom Attack (XL/Bottlegreen)
                            </span>
                        </div>
                        <div className="cartstate">
                            <FaCircleMinus /><span>1</span><FaCirclePlus />
                        </div>
                    </div>
                    <div className="cartlist">
                        <div className="cartimg">
                            <Image width={200} height={200} src='/tshirts.jpg' alt='tshirt' />
                        </div>
                        <div className="carttext">
                            <span>
                                Wings Of Freedom Attack (XL/Bottlegreen)
                            </span>
                        </div>
                        <div className="cartstate">
                            <FaCircleMinus /><span>1</span><FaCirclePlus />
                        </div>
                    </div>
                    <div className="cartlist">
                        <div className="cartimg">
                            <Image width={200} height={200} src='/tshirts.jpg' alt='tshirt' />
                        </div>
                        <div className="carttext">
                            <span>
                                Wings Of Freedom Attack (XL/Bottlegreen)
                            </span>
                        </div>
                        <div className="cartstate">
                            <FaCircleMinus /><span>1</span><FaCirclePlus />
                        </div>
                    </div>
            {/* the last list is about cart buttons like checkout  */}
                    <div className="cartbtn">
                        <div className="carttotal">
                            <span>Sub-total : 852 BDT</span>
                        </div>
                        <div className='btns'>
                            <button className='bg-pink-500 mr-1 hover:bg-pink-600'><IoBagCheckOutline className='mr-1' /><span>Checkout</span></button>
                            <button className='bg-pink-500 ml-1 hover:bg-pink-600'>Clear</button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar