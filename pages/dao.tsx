import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Dao() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen ml-8 mr-8'>
        <Link href="/"><Image src="/metauni.svg" height="72" width="180" alt="metauni-logo" className="invert items-center m-12" /></Link>
        <div className='border-white rounded-md border-2 p-8 lg:max-w-md'>
          <p>Una DAO, u Organización Autónoma Descentralizada, es una entidad sin líderes ni intermediarios centralizados que opera en la blockchain. Funciona a través de un conjunto de contratos inteligentes autoejecutables, programados en una cadena de bloques. Estos contratos definen las reglas y decisiones de la organización, permitiendo a los miembros participar en la toma de decisiones mediante votación ponderada por la cantidad de tokens que poseen. La transparencia y la inmutabilidad inherentes a la tecnología blockchain garantizan la integridad de las reglas acordadas, brindando a los miembros un control directo sobre los recursos y objetivos de la DAO.</p>
          <p><Link href="https://www.xdao.app/10/dao/0x0cAa49278724aD64c635DC1249dC4b38869f83B1" className='underline'>METAUNI en xDAO </Link></p>
          <p><Link href="https://optimistic.etherscan.io/address/0x0caa49278724ad64c635dc1249dc4b38869f83b1" className='underline'>Contrato de Registro</Link></p>
          <p>Fecha de creación: 8-11-2023</p>
          <p>Red: Optimism Blockchain</p>
          <p>Integrantes:</p>
          <p><Link href="https://optimistic.etherscan.io/address/0x2e41898cfbde4c56316e157a10d4a89409e7924e" target="_blank" className='hover:underline'>Evelin Espinoza</Link></p>
          <p><Link href="https://optimistic.etherscan.io/address/0x81b451abc87c8be56e3bf0f16e6fe488ecc15d15" target="_blank" className='hover:underline'>Eric Camborda</Link></p>
          <p><Link href="https://optimistic.etherscan.io/address/0x188af7105D20a61a3233ADA22ED9c61b80Ab903A" target="_blank" className='hover:underline'>Fabo Hax</Link></p>
          <p><Link href="https://optimistic.etherscan.io/address/0x4e6c6744729d33810980d5beeeda173eaa41a963" target="_blank" className='hover:underline'>Camila Villarroel</Link></p>
          <p><Link href="https://optimistic.etherscan.io/address/0x6361d1ad77830E304535C3090Bf551b5c6d46f6A" target="_blank" className='hover:underline'>Rommel Romero</Link></p>
          <p><Link href="https://optimistic.etherscan.io/address/0x01962b1a399528c48b18114e639a44b89A218FD1" target="_blank" className='hover:underline'>Evelyn Loarte</Link></p>
          <p><Link href="https://optimistic.etherscan.io/address/0xb79A22d3E2F93320002F1766Bd5a40A00485dc37" target="_blank" className='hover:underline'>Michael Vera</Link></p>
          <p><Link href="https://optimistic.etherscan.io/address/0x709e6db139b72a6d64e5a7779c94df8310fe8201" target="_blank" className='hover:underline'>Sayuri Oré</Link></p>
          <p><Link href="https://optimistic.etherscan.io/address/" target="_blank" className='hover:underline'>Yadhira Mera</Link></p>
          <p><Link href="https://optimistic.etherscan.io/address/" target="_blank" className='hover:underline'>Sergio Muñoz</Link></p>
        </div>
    </div>
  )
}
