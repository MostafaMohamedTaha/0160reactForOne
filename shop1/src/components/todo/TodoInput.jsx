import React from 'react'

const TodoInput = () => {
    return (
        <div className='flex items-center'>
            <input type="text" className='m-2 rounded-xl' placeholder='todo ...'/>
            <button className='bg-blue-600 px-6 py-1 text-white m-2 rounded-xl'>add</button>
        </div>
    )
}

export default TodoInput
