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
            <Head><title>Metauni - Club Web3</title></Head>
            <Component {...pageProps}/>
        </> 
    )
}

export default App;