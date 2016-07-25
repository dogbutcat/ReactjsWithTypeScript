/**
 * Created by oliver on 7/25/16.
 */
import {List,Map,fromJS} from "immutable";
import Dispatcher from "../dispatcher/AppDispatcher";
import TodoConstants from "../constants/TodoConstants";
import {Observable,Subject} from "rx";

export interface ITodo extends Map<any,any>{}

export interface ITodos extends List<ITodo>{}

class TodosStore{
    private _todos:ITodos;
    private todosObservable:Subject<ITodos>;

    constructor(){
        this.todosObservable = new Subject<ITodos>();
    }

    public get todos(){ return this._todos}
    public set todos(todos){
        this._todos = List.isList(todos)? todos:fromJS(todos);
        this.todosObservable.onNext(this._todos);
    }

    public getTodosObservale(){
        return this.todosObservable;
    }

    public registerActionHandle(){
        Dispatcher.register((action:any)=>{
            switch (action.actionType){
                case TodoConstants.GET_ALL:
                    this.getAll();
                    break;
                case TodoConstants.CREATE:
                    this.create(action.text);
                    break;
            }
        });
    }

    private requestAllFromServer(){
        return  Observable.return([
            {text:"Todo 1"},
            {text:"Todo 2"},
            {text:"Todo 3"},
            {text:"Todo 4"},
            {text:"Todo 5"}
        ]).delay(1000);
    }

    private getAll(){
        this.requestAllFromServer()
            .subscribe((todos: any)=>{
                this.todos = todos;
            })
    }

    private create(text:string){
        Observable.timer(1000)
            .take(1)
            .subscribe(()=>{
                this.todos = this.todos.push(Map({text}))
            })
    }
}

export var todoStore = new TodosStore();