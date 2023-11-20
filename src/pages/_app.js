import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {

   const [cart, setcart] = useState({})
   const [subtotal, setsubtotal] = useState(0)

   useEffect(() => {
      try {
        if(localStorage.getItem('cart')){
          setcart(JSON.parse(localStorage.getItem('cart')))
        }
      } catch (error) {
        console.error(error)
        localStorage.clear;
      }
   }, [])
   

   const savecart = (mycart) =>{
      localStorage.setItem('cart', JSON.stringify(mycart))
      console.log(mycart)
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


  return <>
              <Head>
                <title>Codeswear.com - wear the code</title>
                <meta name='description' content='codeswear.com is e-commarce platform for men , women and children.' />
              </Head>
              <Navbar cart={cart} addToCart={addToCart} clearCart={clearCart} subtotal={subtotal} removecartItem={removecartItem} />
              <Component cart={cart} addToCart={addToCart} clearCart={clearCart} subtotal={subtotal} removecartItem={removecartItem} {...pageProps} />
              <Footer/>
            </>
}
