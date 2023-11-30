import Link from 'next/link'
import React from 'react'

const Myorders = () => {
    return (
        <>


            <div className="relative  overflow-x-auto mt-5">
                <div>
                    
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-pink-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17
                            </th>
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td className="px-6 py-4">
                                $2999
                                <Link href={'/order'}><span className='pl-11 text-blue-800 cursor-pointer'>Details</span></Link>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                5
                            </td>
                            <td className="px-6 py-4">
                                $1999
                                <Link href={'/order'}><span className='pl-11 text-blue-800 cursor-pointer'>Details</span></Link>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                2
                            </td>
                            <td className="px-6 py-4">
                                $99
                                <Link href={'/order'}><span className='pl-11 text-blue-800 cursor-pointer'>Details</span></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Myorders