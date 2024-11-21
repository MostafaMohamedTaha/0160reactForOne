import React from 'react'
import { FaRegEdit } from "react-icons/fa";
const TodoList = () => {
    let todolist = [
        'pray', 'make my task for one', 'make one', 'go to gym', 'go to work', 'read quran', 'some entertainment'
    ]
    return (
        <div>
            <div>
                {todolist.map((x,xIndex)=>{
                    return(
                        <div className="flex justify-center">

                            <li key={xIndex}>{x}</li>
                            <FaRegEdit />
                        </div>


                )
                })}
            </div>
        </div>
    )
}

export default TodoList
