import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'

export default function App({ Component, pageProps }) {

  const router = useRouter()
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

   const addToCart =( itemCode , qty , price , Name , size , varient , img)=>{
       let newcart = cart;
       if(itemCode in cart){
         newcart[itemCode].qty = cart[itemCode].qty + qty;
       }
       else{
        newcart[itemCode] = {qty:1 , price , Name , size , varient , img}
       }

       setcart(newcart)
       savecart(newcart)
   }
   const clearCart =()=>{
    setcart({})
    savecart({})
   }

   const removecartItem =( itemCode , qty , price , Name , size , varient , img)=>{
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

const buyNow = (itemCode, qty , price , Name , size , varient , img) =>{
  let newcart = {itemCode: { qty:1 , price , Name , size , varient, img}}
  setcart(newcart)
  savecart(newcart)
  router.push('/checkout')
    
}

  return <>
              <Head>
                <title>Codeswear.com - wear the code</title>
                <meta name='description' content='codeswear.com is e-commarce platform for men , women and children.' />
                <link rel="icon" href="/favicon.ico?v=1" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />

              </Head>
              <Navbar cart={cart} cartref={cartref} toggleCartBar={toggleCartBar} addToCart={addToCart} clearCart={clearCart} subtotal={subtotal} removecartItem={removecartItem} />
              <Component buyNow={buyNow} toggleCartBar={toggleCartBar} cart={cart} addToCart={addToCart} clearCart={clearCart} subtotal={subtotal} removecartItem={removecartItem} {...pageProps} />
              <Footer/>
            </>
}
