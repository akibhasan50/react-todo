import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,setTodos,filterTodo}) {
 
    return (
        <div>
                <div className="todo-container">
                    <ul className="todo-list">
                       {
                           filterTodo.map(todo =>(
                               <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text}></Todo>
                           ))
                       }
                    </ul>
                </div>
        </div>
    )
}
