import * as React from "react";
import TodosActions from "../actions/TodosActions";

interface IState{
    newText:string
}

export default class TodoFormComponent extends React.Component<any,IState>{

    componentWillMount(){
        this.setInitialState();
    }

    setInitialState(){
        this.state = {
            newText:''
        }
    }

    onChange(e){
        this.setState({newText:e.target.value});
    }

    createTodo(e){
        e.preventDefault();
        if (this.state.newText=='') return
        TodosActions.create(this.state.newText);
        this.setState({
            newText:''
        })
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.newText} onChange={(e)=>this.onChange(e)}/>
                <button onClick={(e)=>this.createTodo(e)}>Create Item</button>
            </div>
        )
    }
}