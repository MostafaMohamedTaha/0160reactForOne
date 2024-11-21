import 'flowbite'
import TodoInput from './components/todo/TodoInput'
import TodoList from './components/todo/TodoList'
import TodoCard from './components/todo/TodoCard'
function App() {
  return (
    <>

      <div className='font-press2 text-2xl justify-center grid '>
      <TodoInput />
      <TodoList className="m-2"/>
      <TodoCard/>
      </div>
    </>
  )
}

export default App
