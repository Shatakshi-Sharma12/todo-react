import React from 'react';
import { FaTrashAlt, FaCheck, FaHourglassHalf } from 'react-icons/fa'; // React icons

const Todo = ({ serial, deleteTodo, checkTodo, todoItem }) => {
    const deleteTodoHandler = (id) => {
        deleteTodo(id);
    };

    const inputChangeHandler = (id) => {
        checkTodo(id);
    };

    return (
        <div className="todo-item">
            <li>
                <div className="todo-content">
                    <span className="serial-number">{serial}.</span> {/* Display serial number */}
                    <input
                        type="checkbox"
                        onChange={() => {
                            inputChangeHandler(todoItem.id);
                        }}
                        defaultChecked={todoItem.checked}
                    />
                    <span className={`todo-text ${todoItem.checked ? 'completed-task' : ''}`}>
                        {todoItem.todo}
                    </span>
                </div>
                <div className="todo-actions">
                    <span className={`todo-status ${todoItem.checked ? 'completed' : 'pending'}`}>
                        {todoItem.checked ? (
                            <>
                                <FaCheck className="status-icon green-icon" />
                                Completed
                            </>
                        ) : (
                            <>
                                <FaHourglassHalf className="status-icon red-icon" />
                                Pending
                            </>
                        )}
                    </span>
                    <span
                        className="delete-icon"
                        onClick={() => deleteTodoHandler(todoItem.id)}
                    >
                        <FaTrashAlt />
                    </span>
                </div>
            </li>
        </div>
    );
};

export default Todo;
