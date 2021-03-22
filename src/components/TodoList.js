import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredStatus}) =>{

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredStatus.map(todo => (
                    <Todo key={todo.id} info={todo} todos={todos} setTodos={setTodos}/>
                ))
                }
            </ul>
        </div>
    )
}

export default TodoList;