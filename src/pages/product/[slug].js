import mongoose from 'mongoose';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Product from '../../../models/Product';
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slug = ({addToCart , toggleCartBar , varients, product , buyNow}) => {
  const router = useRouter()
  const { slug } = router.query;
  const [service, setservice] = useState()
  const [pin, setpin] = useState()

  const checkpin= async()=>{
      let pins = await fetch('http://localhost:3000/api/pincode');
      let json = await pins.json()
      if(json.includes(parseInt(pin))){
        setservice(true)
        toast.success('yeh ! We delevered to this area', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else{
        setservice(false)
        toast.error('sorry ! We do not delevered to this area', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

  }

  const onchange=(e)=>{
      setpin(e.target.value)
  }
  const [color, setcolor] = useState(product.color);
  const [size, setsize] = useState(product.size);
  const refreshpage=(newcolor , newsize)=>{
    let url = `http://localhost:3000/product/${varients[newcolor][newsize]['slug']}`;
    window.location = url;
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className=" mx-auto justify-center flex flex-wrap">
            <Image priority={true} style={{height:'450px', width:'450px'}} width={300} height={300} alt="ecommerce" className="lg:w-1/2 w-full  rounded" src={product.img}/>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest"> {product.category} </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{`${product.title}(${product.size.toUpperCase()}/${product.color.toUpperCase()})`}</h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">{product.desc}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">                  <div className="flex">
                    <span className="mr-3">{product.color}</span>
                    {Object.keys(varients).includes('white') && Object.keys(varients['white']).includes(size) &&  <button onClick={()=>{ refreshpage('white', size)}} className={`border-2 bg-white rounded-full w-6 h-6 focus:outline-none ${color === "white" ? 'border-black':''} `}></button>}

                    {Object.keys(varients).includes('gray') && Object.keys(varients['gray']).includes(size) &&  <button onClick={()=>{ refreshpage('gray', size)}} className={`border-2 bg-gray-600 rounded-full w-6 h-6 focus:outline-none ${color === "gray" ? 'border-black':''} `}></button>}

                    {Object.keys(varients).includes('blue') && Object.keys(varients['blue']).includes(size) &&  <button onClick={()=>{ refreshpage('blue', size)}} className={`border-2 bg-blue-600 rounded-full w-6 h-6 focus:outline-none ${color === "blue" ? 'border-black':''} `}></button>}

                    {Object.keys(varients).includes('yellow') && Object.keys(varients['yellow']).includes(size) &&  <button onClick={()=>{ refreshpage('yellow', size)}} className={`border-2 bg-yellow-600 rounded-full w-6 h-6 focus:outline-none ${color === "yellow" ? 'border-black':''} `}></button>}

                    {Object.keys(varients).includes('purple') && Object.keys(varients['purple']).includes(size) &&  <button onClick={()=>{ refreshpage('purple', size)}} className={`border-2 bg-purple-600 rounded-full w-6 h-6 focus:outline-none ${color === "purple" ? 'border-black':''} `}></button>}

                    {Object.keys(varients).includes('red') && Object.keys(varients['red']).includes(size) &&  <button onClick={()=>{ refreshpage('red', size)}} className={`border-2 bg-red-600 rounded-full w-6 h-6 focus:outline-none ${color === "red" ? 'border-black':''} `}></button>}

                    {Object.keys(varients).includes('black') && Object.keys(varients['black']).includes(size) &&  <button onClick={()=>{ refreshpage('black', size)}} className={`border-2 bg-black rounded-full w-6 h-6 focus:outline-none ${color === "black" ? 'border-white':''} `}></button>}

                    {Object.keys(varients).includes('green') && Object.keys(varients['green']).includes(size) &&  <button onClick={()=>{ refreshpage('green', size)}} className={`border-2 bg-green-600 rounded-full w-6 h-6 focus:outline-none ${color === "green" ? 'border-black':''} `}></button>}

                    {/* <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button> */}
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select value={size} onChange={(e)=>{refreshpage(color , e.target.value)}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                        {Object.keys(varients[color]).includes('sm') && <option value={'sm'}>SM</option>}
                        {Object.keys(varients[color]).includes('md') && <option value={'md'}>MD</option>}
                        {Object.keys(varients[color]).includes('xl') && <option value={'xl'}>XL</option>}
                        {Object.keys(varients[color]).includes('xxl') && <option value={'xxl'}>XXL</option>}
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex align-middle">
                  <span className="title-font font-medium text-md md:text-2xl text-gray-900"> BDT {product.price}</span>
                  <button onClick={()=>{buyNow(slug , 1 , product.price , product.title ,size , color, product.img)}} className="flex ml-4 text-white bg-pink-500 border-0 py-2 px-2  md:px-6 focus:outline-none hover:bg-pink-600 rounded">Buy now</button>
                  <button onClick={()=>{addToCart(slug , 1 , product.price , product.title , size , color , product.img) ; toggleCartBar()}} className="flex  text-white bg-pink-500 border-0 py-2 px-2 ml-3 md:px-2 focus:outline-none hover:bg-pink-600 rounded">Add to Cart</button>
                </div>
                <div className="flex mt-3">
                     <input onChange={onchange} className=" bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 w-[160px] transition-colors duration-200 ease-in-out" type='text' placeholder='Enter your pincode' />
                     <button onClick={checkpin} className="flex ml-2 text-sm text-white bg-red-300 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-red-400 rounded">
                     Check Pin
                     </button>
                </div>
                {/* <div className="checkpin">
                    {(service === true && service !== null) &&  <p className='text-green-600 font-bold mt-3'>Yeh ! We delevered to this area.</p>}
                    {(service === false && service !== null) && <p className='text-red-600 font-bold mt-3'>Sorry ! We dont have any service for this area yet.</p>}

                </div> */}
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context){
    if(!mongoose.connections[0].readyState){
          mongoose.connect(process.env.MONGO_URI)
    }
     let product = await Product.findOne({slug: context.query.slug})
     let colorsizeslug = {};
     let varients = await Product.find({title:product.title})
       for(let item of varients){
         if(Object.keys(colorsizeslug).includes(item.color)){
           colorsizeslug[item.color][item.size] = {slug:item.slug}
         }
         else{
          colorsizeslug[item.color] = {};
          colorsizeslug[item.color][item.size] = {slug:item.slug}
         }
       }
  return {
    props:{product:JSON.parse(JSON.stringify(product)), varients:JSON.parse(JSON.stringify(colorsizeslug))}
  }
}

export default Slug