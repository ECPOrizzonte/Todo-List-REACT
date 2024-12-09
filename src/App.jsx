import { useRef, useState } from 'react'
import './App.css'
import TodoList from './components/todo-list/TodoList'



function App() {
  // const TODO_LIST = [
  //   {id: 1, text: 'Hacer la tarea ', completed: false},
  //   {id: 2, text: 'Tomar mate', completed: false},
  //   {id: 3, text: 'Pasear el perro', completed: false},
  //   {id: 4, text: 'Andar en bici', completed: false},
  //   {id: 5, text: 'Jugar al futbol', completed: false},
  //   {id: 6, text: 'Entrenar Taekwon-do', completed: true},
  // ]

  const inputRef= useRef();

  const [todos, setTodos]= useState(JSON.parse(localStorage.getItem("saveTodos")) || [] )
  
  
  function deleteTodo(id){
    const nuevoArray = todos.filter(todo => todo.id !== id) 
    setTodos(nuevoArray)
    updateLocalStorage(nuevoArray) 
  }
  function handleTodoCompleted(id){
    // console.log(id)
    const nuevoArray = todos.map(todo => {
      if(todo.id === id){
        todo.completed=!todo.completed
      }
      return todo;
    })
    setTodos(nuevoArray)
  }
  function handleAddTodo(evento){
    
    const letterCount = evento.target.value.length;
    if (evento.key=== "Enter" && letterCount > 3 ){
      const newTodo = {
        id: crypto.randomUUID(),
        text: evento.target.value,
        completed: false
      }

      const nuevoArray=[...todos]
      nuevoArray.push(newTodo)
      setTodos(nuevoArray)
      updateLocalStorage(nuevoArray)
      inputRef.current.value = '';
    }
  }

  return (
    <>
    
      <h1 className='todo-list-title'>TO DO LIST REACT</h1>
      <hr />
      <div className="input-container">
        <label htmlFor="">Agregar tarea: </label>
        <input type="text" onKeyUp={handleAddTodo} ref={inputRef} />
      </div>

      <div className="todo-list-container">
      
        <TodoList todos={todos} deleteTodoFn={deleteTodo} handleTodoCompleted={handleTodoCompleted}/>
      
      </div>


    </>
  )



  
}

function updateLocalStorage(array){
  localStorage.setItem("saveTodos", JSON.stringify(array))
}

export default App

