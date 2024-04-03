import Image from 'next/image';
import Link from 'next/link';
import WaitForm from '@/com/waitForm';
import { WalletProvider } from '@/com/WalletContext';
import WalletConnector from '@/com/WalletConnector';

export default function Home() {

  return (
      <WalletProvider>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className='absolute top-2 right-2'><WalletConnector/></div>
        <video autoPlay loop muted className='video-container flex flex-col items-center justify-center'>
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className='mobile-video-container flex flex-col items-center justify-center'>
          <source src="/mobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className='relative mt-8 lg:mt-2 lg:m-24 lg:w-1/3 md:w-1/2 border-2 rounded-3xl p-8 bg-indigo-900/25'>
          <Image src="/metauni.svg" height="72" width="180" alt="metauni-logo" className="items-center m-12 mx-auto invert" />

          <div className='text-gray-100 text-2xl'>
          
          </div>

          <nav className='mt-4 mb-4'>
            <Link href="https://www.spatial.io/s/nilevs-META-UNI-6555c78d7891524361845463?share=2157973459901763422" target="_blank" className='invert block text-black bg-white text-center rounded-full border-2 border-white p-4 mb-2 hover:border-black hover:border-2'><Image src="/play.svg" height="25" width="25" alt="play" className='inline-block mr-2'></Image>
              ENTRA</Link>
            <Link href="/dao" className='block invert text-white bg-transparent text-center rounded-full border-2 border-white p-4 mb-2 hover:bg-white hover:text-black'>
              DAO</Link>
            <Link href="/unit" className='block invert text-white bg-transparent text-center rounded-full border-2 border-white p-4 mb-2 hover:bg-white hover:text-black'>
              TOKEN</Link>
          </nav>

        </div>
        <div>
          <Link href="/info">
            <Image src="/info.svg" height={18} width={18} alt="info" className='absolute bottom-4 left-4'></Image>
          </Link>
        </div>
      </main>
    </WalletProvider>
  );
}
