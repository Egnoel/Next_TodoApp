"use client"
import Image from 'next/image'
import sun from "./images/icon-sun.svg"
import moon from "./images/icon-moon.svg"
import light from "./images/bg-desktop-light.jpg"
import dark from "./images/bg-desktop-dark.jpg"
import Todo from './components/Todo'
import { TodoType, addTodoToServer, getTodosFromServer, deleteCompletedFromServer } from './actions'
import { useState, useEffect, KeyboardEvent } from 'react'


export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [inputValue, setInputValue] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('All');
  const [count, setCount] =useState(0)
  const [lighMode, setLighMode] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const getTodos = async(filter?:string) => {
    if(filter==="Active"){
      setFilterType("Active")
      const newTodos = await getTodosFromServer(false)
      setCount(newTodos.length)
      setTodos(newTodos)
      return
    }else if(filter==="Completed"){
      setFilterType("Completed")
      const newTodos = await getTodosFromServer(true)
      setCount(newTodos.length)
      setTodos(newTodos)
      return
    }
    setFilterType("All")
    const newTodos = await getTodosFromServer()
    setCount(newTodos.length)
    setTodos(newTodos)
    console.log(newTodos)
  }

  const deleteCompleted = async () => {
    const response = await deleteCompletedFromServer()
    console.log(response)
    const newTodos = await getTodosFromServer();
  setTodos(newTodos);
  }

  const handleKeyPress = async(event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const response = await addTodoToServer(inputValue)
      console.log(response)
      getTodos()
      setInputValue('')
    }
  };



  useEffect(() => {
    getTodos()
  }, [])


  return (
    <main className="flex min-h-screen flex-col">
      <div className='h-1/3 relative'>
        {
          lighMode?(
        <Image
          src={light}
          alt='hero'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
          ):(
            <Image
            src={dark}
            alt='hero'
            layout='fill'
            objectFit='cover'
            quality={100}
          />
          )
        }
      </div>
      <div className={`h-2/3 ${lighMode?"bg-[#FAFAFA]":"bg-black"} flex items-center justify-center text-white relative`}>
        <div className='z-10 text-center absolute top-[-200px] w-[90%] h-[70%] sm:w-[60%]'>
          <div className='flex flex-col h-full gap-6 items-center'>
            <div className='flex justify-between flex-row w-full h-8'>
              <h1>TODO</h1>
              <div>
                {
                  lighMode?(
                    <button type='button' title='moon' className='hover:cursor-pointer' onClick={()=>setLighMode(false)} >
                    <Image src={moon} alt='moon' width={20} height={20} />
                    </button>
                  ):(
                    <button type='button' title='sun' className='hover:cursor-pointer' onClick={()=>setLighMode(true)} >
                    <Image src={sun} alt='sun' width={20} height={20} />
                    </button>
                  )
                }
              </div>
            </div>
            <div className={`w-full py-3 ${lighMode?"bg-white":"bg-[#25273D]"} flex flex-row items-center gap-3 rounded-s-lg`}>
              <div className={`w-6 h-6 rounded-full  ${lighMode?"border-[#494C6B]":"border-white"} border ml-2`}></div>
              <input type="text" name="" id="" placeholder='Create a new todo...'value={inputValue} onChange={handleChange} onKeyDown={handleKeyPress} className={`h-6 border-none ${lighMode?"bg-white text-[#494C6B]":"bg-[#25273D] text-white"}  focus:outline-none`} />
            </div>
            <div className={`${lighMode?"bg-white":"bg-[#25273D]"} w-full flex flex-col  divide-y divide-[#979797] gap-1 rounded-s-lg`}>
            {
                todos.map((todo) => (
                  <Todo key={todo._id} {...todo} setTodos={setTodos} lightMode={lighMode} />
                ))
            }
              <div className='px-2 flex flex-row h-12 justify-between items-center text-center py-2 text-[#5B5E7E]'>
                <span>
                 {
                  count>1?`${count} items left`:`${count} item left`
                 }
                </span>
                <div className={`${lighMode?"bg-white text-[#9495A5]":"bg-[#25273D] text-[#5B5E7E]"} sm:flex flex-row items-center justify-center gap-6 rounded-s-lg  font-bold hidden`}>
                  <button type='button' className={`${filterType==="All"?"text-[#3A7CFD]":""} ${lighMode?"hover:text-[#494C6B]":"hover:text-[#E3E4F1]"}  hover:cursor-pointer`} onClick={()=>getTodos()} >All</button>
                  <button type='button' className={`${filterType==="Active"?"text-[#3A7CFD]":""} ${lighMode?"hover:text-[#494C6B]":"hover:text-[#E3E4F1]"} hover:cursor-pointer`} onClick={()=>getTodos("Active")} >Active</button>
                  <button type='button' className={`${filterType==="Completed"?"text-[#3A7CFD]":""} ${lighMode?"hover:text-[#494C6B]":"hover:text-[#E3E4F1]"} hover:cursor-pointer`} onClick={()=>getTodos("Completed")} >Completed</button>
                </div>
                <button type='button' className={`${lighMode?"hover:text-[#494C6B]":"hover:text-[#E3E4F1]"} hover:cursor-pointer`} onClick={()=>deleteCompleted()} >
                  Clear Completed
                </button>
              </div>
            </div>
            <div className={`${lighMode?"bg-white text-[#9495A5]":"bg-[#25273D] text-[#5B5E7E]"} w-full flex flex-row items-center justify-center gap-6 py-4 rounded-s-lg font-bold sm:hidden`}>
              <button type='button' className={`${filterType==="All"?"text-[#3A7CFD]":""}`} onClick={()=>getTodos()} >All</button>
              <button type='button' className={`${filterType==="Active"?"text-[#3A7CFD]":""}`} onClick={()=>getTodos("Active")} >Active</button>
              <button type='button' className={`${filterType==="Completed"?"text-[#3A7CFD]":""}`} onClick={()=>getTodos("Completed")} >Completed</button>
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