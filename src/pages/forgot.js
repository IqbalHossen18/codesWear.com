import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { IoMdArrowBack } from "react-icons/io";

const Forgot = () => {
    const router = useRouter()
    useEffect(() => {
        if(localStorage.getItem('token')){
          router.push('/')
        }
      }, [router])
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">

                <div className="flex flex-col items-center justify-center px-6 py-5 md:py-0  mx-auto md:h-screen">
                    <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <Image src='/logo.png' alt='img' height={250} width={150} />
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div>
                                    <Link className='flex flex-row ' href={'/login'}><IoMdArrowBack /></Link>
                                </div>
                            <h1 className=" font-bold leading-tight tracking-tight text-gray-900 text-md md:text-2xl dark:text-white">
                                Enter your email to restore password
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                               
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>

                                <button type="submit" className="w-full text-white  bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600  rounded">Continue</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Forgot