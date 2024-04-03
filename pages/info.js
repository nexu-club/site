import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { WalletProvider } from '@/com/WalletContext'
import WalletConnector from '@/com/WalletConnector'

export default function Info() {

  return (
    <WalletProvider>
      <div className='flex flex-col items-center justify-center min-h-screen ml-8 mr-8'>
          <Link href="/"><Image src="/metauni.svg" height="72" width="180" alt="metauni-logo" className="invert items-center m-12" /></Link>
          <div className='text-2xl lg:text-lg mb-24 lg:mx-72'>
              <p><strong>METAUNI</strong> es el <strong>Club de Metaverso & Blockchain</strong> creado en la <strong>Universidad Nacional de Ingeniería</strong> del Perú.</p>
              <p>Nos dedicamos a explorar y promover la tecnología <strong>Blockchain</strong> y la <strong>Web3</strong>. A través de una amplia gama de actividades que incluyen eventos, talleres y proyectos de innovación, <strong>METAUNI</strong> busca fomentar el conocimiento y la colaboración en este campo en constante evolución. Con un enfoque en la investigación, el aprendizaje y el desarrollo práctico, nuestro propósito es contribuir al avance de la industria Web3 y su aplicación en diversos sectores.</p>
              
              <div className='text-center'><WalletConnector/></div>
          </div>
      </div>
    </WalletProvider>
  )
}
