// create a simple Todo List component that allows users to add new items to the list and delete items once they are completed. The Todo List should have the following features:

// An input field for adding new todo items

// A button to submit the new todo item

// Display the list of todo items

// A delete button next to each todo item to remove it from the list

// Use the useState hook to manage the todo list state\

import { useState } from "react"

const Exercise4 = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = () => {
        if (inputValue) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    const handleDelete = (index) => {
        console.log(index);
        setTodos(todos.filter((_, currentIndex) => currentIndex !== index));
    }

    return (
        <div>
            <h1>Todo List</h1>

            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button className="btn btn-dark ms-3" onClick={handleSubmit}>Add Item</button>

            <ul>
                {
                    todos && todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Exercise4