import React from 'react'

const Todo = ({info, todos, setTodos}) => {

    //Events
    //Deletes a todo from the List
    const deleteHandler = () =>{
        console.log(`Deleting ${info.text}`)
        setTodos(todos.filter(el => el.id !== info.id))
    }

    //Marks a task as complete or incomplete
    const completeHandler = () =>{
        setTodos(todos.map(item =>{
            if(item.id === info.id){
                return { ...item, complete: !item.complete}
            }
            return item
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${info.complete ? "completed" : ""}`}>{info.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
