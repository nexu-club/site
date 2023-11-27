import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Unit() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen ml-8 mr-8'>
        <Link href="/"><Image src="/metauni.svg" height="72" width="180" alt="metauni-logo" className="invert items-center m-12" /></Link>
        <div className='border-white rounded-md border-2 p-8 lg:max-w-md'>
        <p>
          UNIT es el token nativo de METAUNI, con un suministro total de 1 billón de monedas (1,000,000,000,000) diseñado para impulsar el desarrollo y la utilización del metaverso. Este token sigue el estándar ERC20 y, actualmente, se distribuye entre modeladores y miembros participantes de la DAO (Organización Autónoma Descentralizada) de METAUNI.
          Puedes revisar el contrato de la blockchain Optimism asociado al token UNIT en el siguiente enlace:
        </p>
        <Link href="https://optimistic.etherscan.io/" className='underline'>Contrato UNIT [PRONTO]</Link>
        <p>
          Si estás interesado en colaborar con nosotros en cualquiera de las tareas relacionadas con el desarrollo del metaverso UNI, no dudes en ponerte en contacto enviándonos un mensaje a <Link href="mailto:oli@metauni.club" className='underline'>oli@metauni.club</Link>.
        </p>
        </div>
    </div>
  )
}
