import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'

export default function App({ Component, pageProps }) {

   
  const cartref = useRef()
   const [cart, setcart] = useState({})
   const [subtotal, setsubtotal] = useState(0)

   useEffect(() => {
      try {
        if(localStorage.getItem('cart')){
          setcart(JSON.parse(localStorage.getItem('cart')))
          savecart(JSON.parse(localStorage.getItem('cart')))
        }
      } catch (error) {
        console.error(error)
        localStorage.clear;
      }
   }, [])
   

   const savecart = (mycart) =>{
      localStorage.setItem('cart', JSON.stringify(mycart))
      let subt = 0;
      let keys = Object.keys(mycart)
      for(let i = 0 ; i < keys.length ; i++){
        subt += mycart[keys[i]].price * mycart[keys[i]].qty;
      }
      setsubtotal(subt)
   }

   const addToCart =( itemCode , qty , price , Name , size , varient)=>{
       let newcart = cart;
       if(itemCode in cart){
         newcart[itemCode].qty = cart[itemCode].qty + qty;
       }
       else{
        newcart[itemCode] = {qty:1 , price , Name , size , varient}
       }

       setcart(newcart)
       savecart(newcart)
   }
   const clearCart =()=>{
    setcart({})
    savecart({})
   }

   const removecartItem =( itemCode , qty , price , Name , size , varient)=>{
    let newcart = JSON.parse(JSON.stringify(cart))
    if(itemCode in cart){
      newcart[itemCode].qty = newcart[itemCode].qty - qty
    }
    
    if(newcart[itemCode]['qty']<= 0){
        delete newcart[itemCode]
    }

    setcart(newcart)
    savecart(newcart)
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

  return <>
              <Head>
                <title>Codeswear.com - wear the code</title>
                <meta name='description' content='codeswear.com is e-commarce platform for men , women and children.' />
              </Head>
              <Navbar cart={cart} cartref={cartref} toggleCartBar={toggleCartBar} addToCart={addToCart} clearCart={clearCart} subtotal={subtotal} removecartItem={removecartItem} />
              <Component toggleCartBar={toggleCartBar} cart={cart} addToCart={addToCart} clearCart={clearCart} subtotal={subtotal} removecartItem={removecartItem} {...pageProps} />
              <Footer/>
            </>
}
