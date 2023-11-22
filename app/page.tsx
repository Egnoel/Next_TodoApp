import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='h-1/3 relative'>
        <Image
          src='/images/bg-desktop-dark.jpg'
          alt='hero'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className='h-2/3 bg-black flex items-center justify-center text-white relative'>
        <div className='z-10 text-center absolute top-[-200px]'>
          <h1>Todo App</h1>
        </div>
      </div>
    </main>
  )
}
