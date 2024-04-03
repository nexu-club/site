import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Unit() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <Link href="/"><Image src="/metauni.svg" height="72" width="180" alt="metauni-logo" className="invert items-center m-12" /></Link>
        <div className='border-white rounded-3xl border-2 p-8 lg:max-w-md text-2xl'>
        <p>
          UNIT es el token nativo de METAUNI, con un suministro total de 1 billón de monedas (1,000,000,000,000) diseñado para impulsar el desarrollo y la utilización del metaverso. Este token sigue el estándar ERC20 y, actualmente, se distribuye entre modeladores y miembros participantes de la DAO (Organización Autónoma Descentralizada) de METAUNI.
          </p>
          <p>Puedes revisar el contrato en la blockchain Optimism en el siguiente enlace:
        </p>
        <Link href="https://optimistic.etherscan.io/address/0x922b38b1f36abc96f4ba8ba1321ff0253af79d03" className='underline'>Contrato UNIT</Link>
        <p>
          Si te interesa en colaborar en cualquiera de las tareas relacionadas con el desarrollo de METAUNI, no dudes en ponerte en contacto enviándonos un mensaje a <Link href="mailto:40230@pm.me" className='underline'>40230@pm.me</Link>.
        </p>
        </div>
    </div>
  )
}
