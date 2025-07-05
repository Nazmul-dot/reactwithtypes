import { useState } from "react"
import { AllTodos } from "./AllTodos"
import { TodoFrom } from "./TodoFrom"


export interface Todores{
    name:string,
    email:string,
    phone:string
}

export interface TodosData{
    todo:Todores,
    isActive:Boolean
}
export  const Todo = () => {
    const [todo,settodo]=useState<Todores>({
        name:'',
        email:'',
        phone:''
    })
    const [todoData,settodoData]=useState<TodosData[]>([])

    const addTodo=(todo:Todores)=>{
        settodoData((prev)=>{
            const newTodo={
                todo:todo,
                isActive:false
            }
            console.log(prev)
            console.log(newTodo)
            return [...prev,newTodo];
        })
    }
    const updateTodo=(todo:Todores)=>{
       settodo(todo)
    }
  return (
    <>
    <TodoFrom todo={todo} addTodo={addTodo}></TodoFrom>
    <AllTodos todoData={todoData} updateTodo={updateTodo}></AllTodos>
    </>
  )
}
