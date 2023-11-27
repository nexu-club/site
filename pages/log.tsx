import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Log() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen ml-8 mr-8'>
        <Link href="/"><Image src="/metauni.svg" height="72" width="180" alt="metauni-logo" className="invert items-center m-12" /></Link>
        <div className='border-white rounded-md border-2 p-8'>
          <p>Gracias por suscribirte a la Lista de Espera.</p>
          <p>Te mantendremos al tanto del progreso de METAUNI.</p>
          <p>Si deseas colaborar con nosotros o enviar sugerencias, </p>
          <p>puedes escribirnos a <Link href="mailto:oli@metauni.club" className='text-blue-500'>oli@metauni.club</Link></p>
        </div>
    </div>
  )
}
