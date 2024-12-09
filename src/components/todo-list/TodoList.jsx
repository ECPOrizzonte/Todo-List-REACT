  function TodoList({todos, deleteTodoFn, handleTodoCompleted}){
 
    return(

        <ul className="todo-list">

          {
            todos.map( (todo) => {
              
              return(
                  <li className='todo-item' key={todo.id}>
                    
                    <div className="todo-left">
                      <input type="checkbox" defaultChecked= {todo.completed} className='todo-checkbox' 
                      onChange={()=>handleTodoCompleted(todo.id)}/>


                      <span className={`todo-task todo-text ${todo.completed ? 'done' :''}`}>
                        {todo.text} 
                      </span>
                    </div>
                    

                    <button className='todo-delete' onClick={()=>deleteTodoFn(todo.id)}>❌</button>

                  </li>
              )

            } )  

          }
          

        </ul>

    )

}

export default TodoList;