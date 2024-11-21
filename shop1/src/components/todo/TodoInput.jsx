import React, { useState } from 'react'

const TodoInput = ({handleTodoListAdd}) => {
    const [todoValue,setTodoValue]=useState('')
    return (
        <div className='flex items-center'>
            <input type="text" className='m-2 rounded-xl' placeholder='todo ...' value={todoValue} onChange={(e)=>{setTodoValue(e.target.value)}}/>
            <button className='bg-blue-600 px-6 py-1 text-white m-2 rounded-xl' onClick={()=>{ handleTodoListAdd(todoValue)}}>add</button>
        </div>
    )
}

export default TodoInput
