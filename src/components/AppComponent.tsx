/**
 * Created by oliver on 7/24/16.
 */

import * as React from "react";
import {todoStore, ITodos, ITodo} from "../store/TodosStore";
import {List} from "immutable";
import TodosActions from "../actions/TodosActions";
import TodoListComponent from "./TodoListComponent";
import TodoFormComponent from "./FormComponent";

interface IState{
    todos:ITodos;
}

export default class AppComponent extends React.Component<any,any>{
    private todoSubscriber;

    componentWillMount(){
        this.setInitialState();
        this.subscirbeToChange();

        TodosActions.getAll();
    }

    setInitialState(){
        this.state = { todos:List([])}
    }
    
    subscirbeToChange(){
        this.todoSubscriber = todoStore.getTodosObservale()
            .subscribe((todos)=>{
                this.setState({todos:todos})
            })
    }
    
    componentWillUnmount(){
        this.todoSubscriber.dispose();
    }

    render(){ 
        return (
            <div>
                <h1>Typescript, React, Flux, Immutable in a Todo App!</h1>
                <hr />
                <TodoFormComponent />
                <TodoListComponent todos={this.state.todos}/>
            </div>
        )
    }

}