/**
 * Created by oliver on 7/25/16.
 */
import Dispatcher from "../dispatcher/AppDispatcher";
import TodosConstants from "../constants/TodoConstants";
import {ITodo} from "../store/TodosStore";

export default class TodosActions{
    static getAll(){
        Dispatcher.dispatch({
            actionType:TodosConstants.GET_ALL
        })
    }

    static create(text: string){
        Dispatcher.dispatch({
            actionType: TodosConstants.CREATE,
            text: text
        })
    }

    static toggleCompleted(todo:ITodo){
        Dispatcher.dispatch({
            actionType:TodosConstants.TOGGLE_COMPLETED,
            todo: todo
        })
    }
}