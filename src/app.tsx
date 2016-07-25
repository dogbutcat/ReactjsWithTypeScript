/**
 * Created by oliver on 7/23/16.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import AppComponent from "./components/AppComponent";
import {todoStore} from "./store/TodosStore";

todoStore.registerActionHandle();

ReactDOM.render(
    <AppComponent/>,
    document.getElementById('todoApp')
)