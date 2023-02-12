import React from "react";

export default function Todo({todo, togtodo}){
    function handleTodoClick(){
        togtodo(todo.name)

    }
    return(
       <div>
         <label>
            <input type= 'checkbox' defaultChecked={
                todo.complete 
            } onChange={handleTodoClick} />
             {todo.name}
        </label>
       </div>
       
    )
}