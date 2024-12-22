import React from 'react';
import { FaCheckCircle, FaSpinner, FaTrashAlt } from 'react-icons/fa'; // Import React Icons
import './TodoList.css';

const TodoList = ({ todos, deleteTodo, checkTodo }) => {
    return (
        <div className="todo-table-container">
            <table className="todo-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.todo}</td>
                            <td
                                className={`status ${item.checked ? 'completed' : 'pending'}`}
                                onClick={() => checkTodo(item.id)} // Toggle status on click
                                style={{ cursor: 'pointer' }} // Add pointer cursor for interactivity
                            >
                                {item.checked ? (
                                    <>
                                        <FaCheckCircle className="status-icon green" /> Completed
                                    </>
                                ) : (
                                    <>
                                        <FaSpinner className="status-icon orange" /> Pending
                                    </>
                                )}
                            </td>
                            <td>
                                <button
                                    className="delete-button"
                                    onClick={() => deleteTodo(item.id)}
                                    title="Delete Task"
                                >
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
