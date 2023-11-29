import Image from 'next/image'
import sun from "./images/icon-sun.svg"
import moon from "./images/icon-moon.svg"
import cross from "./images/icon-cross.svg"
import check from "./images/icon-check.svg"

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
        <div className='z-10 text-center absolute top-[-200px] w-[90%] bg-red-300 h-[70%]'>
          <div className='flex flex-col h-full gap-6'>
            <div className='flex justify-between flex-row w-full bg-blue-400 h-8'>
              <h1>TODO</h1>
              <div>
                <Image src={sun} alt='sun' width={24} height={24} />
              </div>
            </div>
            <div className='w-full h-24 bg-slate-500 flex flex-row items-center gap-3 rounded-sm'>
              <div className='w-6 h-6 rounded-full border-white border ml-2'></div>
              <input type="text" name="" id="" placeholder='Create a new todo...' className='h-6 border-none bg-slate-500 text-white' />
            </div>
            <div className='bg-green-200 w-full flex flex-col items-center'>
              <div className='w-[95%] flex flex-row h-12 justify-between items-center text-center'>
                <div className='w-4 h-4 rounded-full border-white border'></div>
                <span className='text-sm flex items-center justify-center'>Complete Online JavaScript Course</span>
                 <button type="button" title='delete' className='flex items-center justify-center' >
                <Image src={cross} alt='cross' width={10} height={10}  />
                 </button>
              </div>
              <div className='w-full border border-b border-slate-600'></div>
            </div>
            <div className='bg-zinc-500 w-full'></div>
          </div>
        </div>
      </div>
    </main>
  )
}
