import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
        <Head>
           <title>Codeswear.com - were the code</title>
           <meta name='description' content='codeswear.com is e-commarce platform for men , women and children.'/>
        </Head>
       <Component {...pageProps} />
  </>
}
