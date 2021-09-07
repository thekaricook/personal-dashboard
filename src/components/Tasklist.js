import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TodoList from './TodoList';

const Tasklist = () => {
    //State
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    //Run once when app starts
    useEffect(() => {
        getLocalTodos();
    }, []);

     //Use Effect
     useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    //Functions
    const filterHandler = () => {
        switch(status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    //Save to local
    const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
    };
    const getLocalTodos = () => {
        if (localStorage.getItem('todos') ===null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else{
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    }

    return (
        <div className="tasklist-content">
                    <h2>To Do:</h2>
                <div className="list">
                    <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
                </div>

                <div className="add-new-task">
                    <TaskForm 
                        todos={todos} 
                        setTodos={setTodos} 
                        setInputText={setInputText} 
                        inputText={inputText}
                        setStatus={setStatus} 
                    />
                </div>
        </div>
    )
}

export default Tasklist;