import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <Link href="/"><Image src="/metauni.svg" height="72" width="180" alt="metauni-logo" className="invert items-center m-12" /></Link>
        <div className='border-white rounded-md border-2 p-8'>

        </div>
    </div>
  )
}
