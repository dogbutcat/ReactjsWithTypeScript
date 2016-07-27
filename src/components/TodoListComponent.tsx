import * as React from "react";
import {ITodos, ITodo} from "../store/TodosStore";
import TodoItemComponent from "./TodoItemComponent";

interface IProps{
    todos:ITodos;
}

export default class TodoListComponent extends React.Component<IProps,any>{

    shouldComponentUpdate(nextProps,nextState){
        return this.props.todos !== nextProps.todos;
    }

    render(){
        return (
            <ul>
                {this.props.todos.map((todo:ITodo,key)=>{
                    return <TodoItemComponent key = {key} todo = {todo}/>
                })}
            </ul>
        )
    }
}