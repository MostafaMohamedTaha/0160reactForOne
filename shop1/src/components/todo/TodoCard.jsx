import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
const TodoCard = ({ children,handleTodoListDelete,index,handleTodoListUpdate,task }) => {
    if (!children) return null;
    return (
        <div>
            <div className="max-w-md mx-auto relative">
                <div className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {children}
                </div>
                <button className="text-white absolute mx-[50px] end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>handleTodoListUpdate(index, prompt(`Enter updated task ${index}:`, task))}>
                    <FaRegEdit />
                </button>
                <button className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={()=>handleTodoListDelete(index)}>
                    <RiDeleteBin6Fill />
                </button>
            </div>
        </div>
    )
}

export default TodoCard
