import React from 'react';
import Todo from './firstTodo'
//the todos.length is put inside curry bracket to signify that it is a javascript code
//key allows react to only rerender or change the component that actually change inside of an array inside of changing the all values every single time.
export default function TodoList({todos, togtodo}){
    return(

        todos.map(todo =>{
            return <Todo key={todo.name} todo ={todo} togtodo={togtodo}/>
        })
    )
}
