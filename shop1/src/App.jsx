import 'flowbite'
import TodoInput from './components/todo/TodoInput'
import TodoList from './components/todo/TodoList'
import { useEffect, useState } from 'react';
function App() {
  const [todoList, setTodoList] = useState([
    'pray', 'make my task for one', 'make one', 'go to gym', 'go to work', 'read quran', 'some entertainment'
  ])
  let localData=(newList)=>{
    localStorage.setItem('todoList',JSON.stringify({todoList:newList}))
    
  }
  let handleTodoListAdd = (newTask) => {
    const newTodo = [...todoList, newTask]
    localData(newTodo)
    setTodoList(newTodo)
  }
  let handleTodoListDelete = (index) => {
    const newTodo = todoList.filter((x, xIndex) => {
      return xIndex != index
    })
    localData(newTodo)
    setTodoList(newTodo)
  }
  const handleTodoListUpdate = (index, newTask) => {
    const updatedTodoList = todoList.map((task, taskIndex) =>
        taskIndex === index ? newTask : task
    );
    setTodoList(updatedTodoList);
    localData(updatedTodoList);
};
  useEffect(() => {
    if (!localStorage) return 
    let localStorageCache = localStorage.getItem('todoList')
    if (!localStorageCache) return

    localStorageCache = JSON.parse(localStorageCache).todoList
    setTodoList(localStorageCache)
    },[])
  return (
    <>

      <div className='font-press2 text-2xl justify-center grid '>
        <TodoInput handleTodoListAdd={handleTodoListAdd} />
        <TodoList className="m-2" todos={todoList} handleTodoListDelete={handleTodoListDelete} handleTodoListUpdate={handleTodoListUpdate} />
      </div>
    </>
  )
}

export default App
