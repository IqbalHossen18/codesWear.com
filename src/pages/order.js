import Image from 'next/image'
import React from 'react'

const Order = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <p>codeswear.com</p>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{`My Order's`}</h1>
              <div className="flex mb-4">
                <a className="flex-grow border-b-2 py-2 text-xl md:font-semibold text-center px-1">Product Name</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-xl md:font-semibold text-center px-1">Quantity</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-xl md:font-semibold text-center px-1">Price</a>
              </div>
              <div className="flex border-t   border-gray-200 py-2">
              <span className="text-gray-500 break-words">Wear the code</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">BDT 499</span>
              </div>
              <div className="flex border-t  border-gray-200 py-2">
              <span className="text-gray-500">Wear the code</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">BDT 499</span>
              </div>
              <div className="flex border-t  border-b mb-6 border-gray-200 py-2">

              <span className="text-gray-500">Wear the code</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">BDT 499</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-lg md:text-2xl text-gray-900">Subtotal : BDT 1899</span>
                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded">Track order</button>
              </div>
            </div>
            <Image width={3000} height={2000} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/slide2.jpg"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Order