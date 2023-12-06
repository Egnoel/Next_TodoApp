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
    <div className='px-2 flex flex-row h-12 justify-between items-center text-center hover:cursor-pointer'>
                <div className='flex gap-2 flex-row items-center'>
                <div className={`w-6 h-6 rounded-full border-white border ${completed?'flex items-center justify-center bg-gradient-to-r from-[#55DDFF] to-[#C058F3]':''}`}>
                {
                    completed && <Image src={check} alt='check' width={10} height={10} />
                }
                </div>
                <span className={`text-sm flex items-center text-[#C8CBE7] ${completed? 'line-through':''}`}>
                    {title}
                </span>
                </div>
                 <button type="button" title='delete' className='flex items-center justify-center' >
                <Image src={cross} alt='cross' width={10} height={10} className='fill-[#494C6B]'  />
                 </button>
              </div>
  )
}

export default Todo