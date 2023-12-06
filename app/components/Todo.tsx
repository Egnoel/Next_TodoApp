import Image from 'next/image'
import React from 'react'
import cross from "../images/icon-cross.svg"
import check from "../images/icon-check.svg"

interface TodoType{
    title: string,
    completed: boolean
}

const Todo = ({title, completed}:TodoType) => {
  return (
    <div className='px-2 flex flex-row h-12 justify-between items-center text-center'>
                <div className='flex gap-2 flex-row items-center'>
                <div className='w-4 h-4 rounded-full border-white border'></div>
                <span className='text-sm flex items-center '>
                    {title}
                </span>
                </div>
                 <button type="button" title='delete' className='flex items-center justify-center' >
                <Image src={cross} alt='cross' width={10} height={10}  />
                 </button>
              </div>
  )
}

export default Todo