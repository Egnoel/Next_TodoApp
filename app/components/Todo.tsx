import Image from 'next/image'
import React from 'react'
import cross from "../images/icon-cross.svg"
import check from "../images/icon-check.svg"
import { TodoType, deleteTodoFromServer, getTodosFromServer, updateTodoOnServer } from '../actions'


interface TodoProps extends TodoType {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  lightMode:boolean;
}


const Todo = (props: TodoProps) => {
  const {title, completed, _id, setTodos, lightMode} = props;

  const updateTodo = async() => {
    const newTodo={
     _id, title, completed:!completed
    }
    console.log(newTodo)
  const response = await updateTodoOnServer(newTodo)
  const newTodos = await getTodosFromServer();
  setTodos(newTodos);
  }

  const deleteTodo = async() => {
    if(_id){
      const response = await deleteTodoFromServer(_id)
      console.log(response)
      const newTodos = await getTodosFromServer();
    setTodos(newTodos);
    }
  }

  return (
    <div className='px-2 flex flex-row h-12 justify-between items-center text-center '>
                <div className='flex gap-2 flex-row items-center'>
                <button className='w-6 h-6 rounded-full flex items-center justify-center  hover:cursor-pointer hover:bg-gradient-to-r from-[#55DDFF] to-[#C058F3]' onClick={()=>updateTodo()} >
                <div className={`w-[95%] h-[95%] ${lightMode?"bg-white border-[#494C6B] border":"bg-[#393A4B]"} rounded-full  ${completed?'flex items-center justify-center bg-gradient-to-r from-[#55DDFF] to-[#C058F3]':''}`}>
                {
                    completed && <Image src={check} alt='check' width={10} height={10} />
                }
                </div>
                </button>
                <span className={`text-sm flex items-center ${lightMode?"text-[#494C6B] hover:text-[#494C6B]":"text-[#C8CBE7] hover:text-[#E3E4F1]"}  hover:cursor-pointer  ${completed? 'line-through':''}`}>
                    {title}
                </span>
                </div>
                 <button type="button" title='delete' className='flex items-center justify-center hover:cursor-pointer' onClick={()=>deleteTodo()} >
                <Image src={cross} alt='cross' width={10} height={10} className='fill-[#494C6B]'  />
                 </button>
              </div>
  )
}

export default Todo