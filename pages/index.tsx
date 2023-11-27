import Image from 'next/image';
import Link from 'next/link';
import WaitForm from '@/com/waitForm';

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <title>metauni</title>

      <video autoPlay loop muted className='video-container flex flex-col items-center justify-center'>
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted className='mobile-video-container flex flex-col items-center justify-center'>
        <source src="/mobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='absolute'>
        <Image src="/metauni.svg" height="72" width="180" alt="metauni-logo" className="invert items-center m-12" />

        <WaitForm/>

        <nav className='mt-4 mb-4'>
          <Link href="https://www.spatial.io/s/nilevs-META-UNI-6555c78d7891524361845463?share=2157973459901763422" target="_blank" className='invert block text-black bg-white text-center rounded-full border-2 border-white p-4 mb-2 hover:bg-white hover:text-black'><Image src="/play.svg" height="25" width="25" alt="play" className='inline-block mr-2'></Image>VERSIÓN EN SPATIAL</Link>
          <Link href="/dao" className='block invert text-white bg-black text-center rounded-full border-2 border-white p-4 mb-2 hover:bg-white hover:text-black'>DAO</Link>
          <Link href="/unit" className='block invert text-white bg-black text-center rounded-full border-2 border-white p-4 mb-2 hover:bg-white hover:text-black'>UNIT</Link>
        </nav>
        <span className="block text-sm m-2 text-white">
            • Aplican <Link href="/uso" className='font-bold'>Términos de Uso</Link> y <Link href="/privacidad" className='font-bold'>Privacidad</Link>
        </span>
      </div>

    </main>
  );
}
