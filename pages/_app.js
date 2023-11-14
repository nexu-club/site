import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';

import 'typeface-inter';
import 'typeface-roboto';

function App ({Component, pageProps}) {
    return(
        <>
            <Head><title>metauni - metacampus UNI</title></Head>
            <div className='bg-red-500 w-full h-1 fixed top'></div>
            <Component {...pageProps}/>
        </> 
    )
}

export default App;