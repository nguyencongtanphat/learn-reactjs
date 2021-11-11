import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames'
import './style.scss'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList({ todoList, onTodoClick }) {


    return (
        <ul className='todo-list'>
            {todoList.map((todo, index) => (
                <li id={index}
                    className={className({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={() => { onTodoClick(todo, index) }}
                >
                    {todo.title}
                </li>
            ))}

        </ul>
    );
}

export default TodoList;