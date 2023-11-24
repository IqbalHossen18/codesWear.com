import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaWindowClose,  } from "react-icons/fa";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { IoBagCheckOutline ,   } from "react-icons/io5";
const Checkout = ({cart , subtotal , removecartItem, addToCart}) => {
  return (
    <>
         <div className="checkout-container flex md:flex-row flex-col">
         <form className="  bg-white flex flex-col p-3 md:pl-10 m-auto md:m-0 w-full md:w-[50%] ">
            <h2 className="text-gray-900 text-4xl mb-1 font-medium title-font">Delivery Details</h2>
            <div className="contactbox mt-5">
            <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>Contact Info</h2>
            <div className="flex flex-col  w-full">
              <div>
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div>
             <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
             </div>
             <div>
             <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">Mobile</label>
              <input type="phone" id="mobile" name="mobile" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
             </div>
            </div>
              </div>            
            <div className="addressbox mt-5">
            <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>Address</h2>
             <div className=" mb-4 flex flex-col">
              <div>
              <label htmlFor="district" className="leading-7 text-sm text-gray-600">District</label>
              <input type="text" id="district" name="district" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
             <div>
             <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
              <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
             </div>
             <div>
             <label htmlFor="village" className="leading-7 text-sm text-gray-600">Village</label>
              <input type="text" id="village" name="village" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
             </div>
            </div>
            </div>
            <hr className='my-4 border-t-8 border-pink-500'/>
          </form>
          

          <div className="cartbox  md:w-[50%] p-3">
          <div style={{padding:'10px 0px'}}  className="bg-pink-100 rounded-lg ">
                <div className="carthead">
                    <h2>Your Cart</h2>
                    <label htmlFor="carticon">

                        <FaWindowClose className='cartclose' />
                    </label>
                </div>
                <div className="cartitem">
                    { Object.keys(cart).map((k)=>{
                        return <div className="cartlist" key={k}>
                        <div className="cartimg">
                            <Image width={200} height={200} src={cart[k].img} alt='tshirt' />
                        </div>
                        <div className="carttext">
                            <span>
                                {cart[k].Name}
                            </span>
                            <p className='text-black text-sm'>{`${cart[k].size.toUpperCase()}/${cart[k].varient.toUpperCase()}`}</p>
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
                        <div  className='btns'>
                            <Link href={'/checkout'} >
                            <button className='bg-pink-500 hover:bg-pink-600'><IoBagCheckOutline className='mr-1 text-white' /><span>Payment</span></button>
                            </Link>
                            <p className="text-xs text-gray-500 mt-3">Check your delivery details before continue</p>
                        </div>

                    </div>

                </div>

            </div>
          </div>
         </div>
    </>
  )
}

export default Checkout