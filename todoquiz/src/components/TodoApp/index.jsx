import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../../redux/slice/todoApp'
import { addTodo } from '../../redux/slice/todoApp'
const TodoApp = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [todos, setTodos] = useState([])
    const [Value, setvalue] = useState("")

    return (
        <div>
            <h1>TodoApp</h1>
            <form action="">
                <input type="text" onChange={(e) => {
                    e.preventDefault()
                    setvalue(e.target.value)
                    // console.log(e.target.value);
                }} />
                <button type='submit' onClick={() => {
                    dispatch(addTodo(Value))
                }}
                >Add</button>
                <div>
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo}>{todos}
                                <button>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </form>
        </div>
    )
}

export default TodoApp
