import mongoose from 'mongoose'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Product from '../../models/Product'

const Mugs = ({ products }) => {
  const capital = (word) => {
    let lower = word.toLowerCase();
    return lower.toUpperCase()
  }
  return (
    <>
      <section className="text-gray-600 body-font">
        {Object.keys(products).length === 0 && <p className='text-center mt-5 font-bold'>This item is not available !!</p>}
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.keys(products).map((item) => {
              return <Link key={products[item]._id} href={`/product/${products[item].slug}`} className="lg:w-1/4 md:w-1/2 p-4 w-full tshirt-box">
                <div className="flex justify-center relative h-48 rounded overflow-hidden">
                  <Image alt="mugs" className="mugsphoto" src={`${products[item].img}`} width={596} height={600} />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                  <p className="mt-1">BDT {products[item].price}</p>

                  <div className='flex gap-1'>
                    {products[item].size.includes('sm') && <span className='border px-2  border-gray-300'>{capital('sm')}</span>}
                    {products[item].size.includes('md') && <span className='border px-2  border-gray-300'>{capital('md')}</span>}

                    {products[item].size.includes('l') && <span className='border px-2  border-gray-300'>{capital('l')}</span>}

                    {products[item].size.includes('xl') && <span className='border px-2  border-gray-300'>{capital('xl')}</span>}

                    {products[item].size.includes('xxl') && <span className='border px-2  border-gray-300'>{capital('xxl')}</span>}

                  </div>
                  <div className='mt-1 flex gap-1'>
                    {products[item].color.includes('gray') && <button className="border-2 border-gray-300 bg-gray-400 rounded-full w-4 h-4 focus:outline-none"></button>}
                    {products[item].color.includes('blue') && <button className="border-2 border-gray-300 bg-blue-500 rounded-full w-4 h-4 focus:outline-none"></button>}
                    {products[item].color.includes('green') && <button className="border-2 border-gray-300 bg-green-500 rounded-full w-4 h-4 focus:outline-none"></button>}
                    {products[item].color.includes('white') && <button className="border-2 border-gray-300 bg-white rounded-full w-4 h-4 focus:outline-none"></button>}
                    {products[item].color.includes('black') && <button className="border-2 border-gray-300 bg-black rounded-full w-4 h-4 focus:outline-none"></button>}
                    {products[item].color.includes('yellow') && <button className="border-2 border-gray-300 bg-yellow-500 rounded-full w-4 h-4 focus:outline-none"></button>}

                  </div>
                </div>
              </Link>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: 'Mugs' })
  let mugs = {}
  for (let item of products) {
    if (item.title in mugs) {
      if (!mugs[item.title].color.includes(item.color) && item.availableQty > 0) {
        mugs[item.title].color.push(item.color)
      }
      if (!mugs[item.title].size.includes(item.size) && item.availableQty > 0) {
        mugs[item.title].size.push(item.size)
      }
    } else {
      mugs[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        mugs[item.title].color = [item.color]
        mugs[item.title].size = [item.size]
      }
    }
  }
  return { props: { products: JSON.parse(JSON.stringify(mugs)) } }
}





export default  Mugs