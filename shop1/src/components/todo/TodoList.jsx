import React from 'react'
import TodoCard from './TodoCard';
const TodoList = ({todos,handleTodoListDelete,handleTodoListUpdate}) => {

    return (
        <div>
            <div>
                {todos.map((x, xIndex) => {
                    return (
                        <TodoCard key={xIndex} index={xIndex} handleTodoListDelete={handleTodoListDelete} handleTodoListUpdate={handleTodoListUpdate}>
                            <p>
                                {x}
                            </p>
                        </TodoCard>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList
