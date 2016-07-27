import * as React from "react";
import {ITodo} from "../store/TodosStore";
import TodosActions from "../actions/TodosActions";

interface IProps extends React.Props<TodoItemComponent>{
    todo:ITodo;
}

export default class TodoItemComponent extends React.Component<IProps,any>{

    toggleCompleted(){
        TodosActions.toggleCompleted(this.props.todo);
    }

    render(){
        let todo = this.props.todo,completedLink,style={};

        if (todo.get('completed')){
            completedLink = <a href="#" onClick={()=> this.toggleCompleted()}>Mark Uncomplete</a>;
            style['textDecoration']='line-through';
        }else {
            completedLink = <a href="#" onClick={()=>this.toggleCompleted()}>Mark Complete</a>;
            style['textDecoration']='none';
        }

        return (
            <li>
                <span style={style}>{this.props.todo.get('text')}</span>  {completedLink}
            </li>
        )
    }
}