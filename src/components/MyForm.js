import React, {useEffect} from 'react'

const MyForm = ({setInputText, inputText, todo, setTodo, setStatus}) =>{

    const inputHandler = (e) => setInputText(e.target.value)

    const submitTodoHandler = (e) =>{
        e.preventDefault()
        setInputText("")
        setTodo(
            [...todo, {
                id: Math.trunc((Date.now()* Math.random())),
                text: inputText,
                complete: false
            }]
        )
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    useEffect(() => {
        console.log('mounted')
    }, [])

    return(
        <form onSubmit={submitTodoHandler}>
            <input value={inputText} onChange={inputHandler} type="text" className="todo-input"/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncomplete">Uncomplete</option>
                </select>
            </div>
        </form>
    );
}

export default MyForm;