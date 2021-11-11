import React, { useState} from 'react';
import TodoList from './components/TodoList/index.jsx'
import queryString from 'query-string'
import {useLocation } from 'react-router-dom';


function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'completed'
        },
        {
            id: 2,
            title: 'sleep',
            status: 'new'
        },
        {
            id: 3,
            title: 'code',
            status: 'new'
        }
    ]
    const location = useLocation()
    const [todoList, setTodoList] = useState(initTodoList)
    const [filter, setFilter] = useState(()=>{
    
      const params = queryString.parse(location.search)
      console.log(params)
        return 'all'
    })

    const handleTodoList = (todo, index) => {
        console.log(todo, index)
        todoList[index].status = todo.status === 'new' ? 'completed' : 'new'
        const newTodoList = [...todoList]
        console.log(newTodoList)
        setTodoList(newTodoList)
    }

    const handleShowAll = () => {
        setFilter('all')
    }
    const handleShowCompleted = () => {
        setFilter('completed')
    }
    const handleShowNew = () => {
        setFilter('new')
    }

    const filterTodo = todoList.filter((todo) => {
        return filter === 'all' || todo.status === filter
    })
    return (
        <div>
            <h1>TODO LIST</h1>
            <TodoList todoList={filterTodo} onTodoClick={handleTodoList} />
            <div>
                <button onClick={handleShowNew}>show new</button>
                <button onClick={handleShowCompleted}>show completed</button>
                <button onClick={handleShowAll}>show all</button>
            </div>
        </div>
    );
}

export default TodoFeature;