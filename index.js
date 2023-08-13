import React from 'react';
import { Container } from '@mui/material';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import todoReducer from './reducers/todoReducer';

let newID = (function () {
    let id = 0;
    return function () {
        id++;
        return id;
    }
})();


const TodoApp = () => {
    
    const [todos, dispatch] = React.useReducer(todoReducer, []);

    const saveTodo = React.useCallback(function (title) {
        dispatch({type: "add-todo", payload: {id: newID(), title}})
    }, [todos]);

    const updateStatus = React.useCallback((id) => {
        dispatch({type: "change-status", payload: {id}})
    }, [todos])

    //React.useEffect(() => console.log(todos), [todos])
    return (
        <Container maxWidth="sm">
            <AddTodoForm onSave={saveTodo} />
            <TodoList data={todos} onStatusUpdate={updateStatus} />
        </Container>
    )
}

export default TodoApp;