import Image from 'next/image'
import sun from "./images/icon-sun.svg"
import moon from "./images/icon-moon.svg"
import Todo from './components/Todo'


export default function Home() {
  const todos =[
    {
      title: "Complete Online JavaScript Course",
      completed: true
    },
    {
      title: "Jog around the park 3x",
      completed: false
    },
    {
      title: "10 minutes meditation",
      completed: false
    },
    {
      title: "Read for 1 hour",
      completed: false
    },
    {
      title: "Pick up groceries",
      completed: false
    },
    {
      title: "Complete Todo App on Frontend Mentor",
      completed: false
    },
  ]
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
        <div className='z-10 text-center absolute top-[-200px] w-[90%] h-[70%] sm:w-[60%]'>
          <div className='flex flex-col h-full gap-6 items-center'>
            <div className='flex justify-between flex-row w-full h-8'>
              <h1>TODO</h1>
              <div>
                <Image src={sun} alt='sun' width={24} height={24} />
              </div>
            </div>
            <div className='w-full py-3 bg-[#25273D] flex flex-row items-center gap-3 rounded-s-lg'>
              <div className='w-6 h-6 rounded-full border-white border ml-2'></div>
              <input type="text" name="" id="" placeholder='Create a new todo...' className='h-6 border-none bg-[#25273D] text-white' />
            </div>
            <div className='bg-[#25273D] w-full flex flex-col  divide-y divide-[#979797] gap-1 rounded-s-lg'>
              {
                todos.map((todo, index) => <Todo key={index} {...todo} />)
              }
              <div className='px-2 flex flex-row h-12 justify-between items-center text-center py-2 text-[#5B5E7E]'>
                <span className='hover:text-[#E3E4F1] hover:cursor-pointer'>
                  5 items left
                </span>
                <div className='bg-[#25273D] sm:flex flex-row items-center justify-center gap-6 rounded-s-lg text-[#5B5E7E] font-bold hidden'>
              <span className='text-[#3A7CFD] hover:text-[#E3E4F1] hover:cursor-pointer'>All</span>
              <span className='hover:text-[#E3E4F1] hover:cursor-pointer'>Active</span>
              <span className='hover:text-[#E3E4F1] hover:cursor-pointer'>Completed</span>
            </div>
                <span className='hover:text-[#E3E4F1] hover:cursor-pointer'>
                  Clear Completed
                </span>
              </div>
            </div>
            <div className='bg-[#25273D] w-full flex flex-row items-center justify-center gap-6 py-4 rounded-s-lg text-[#5B5E7E] font-bold sm:hidden'>
              <span className='text-[#3A7CFD]'>All</span>
              <span>Active</span>
              <span>Completed</span>
            </div>
            <span className='text-slate-400 text-center w-full mt-6'>
              Drag and drop to reorder list
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
