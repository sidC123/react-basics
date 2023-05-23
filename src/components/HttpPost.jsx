import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HttpPost() {
    // to start backend server run: json-server --watch db.json --port 3001

    const [items, setItem] = useState([]);
    const [userName, setUserName] = useState('');

    const getUsers = async () => {
        try {
            // const res = await axios.get('http://localhost:3001/users')
            const res = await axios.get('https://6443f21e466f7c2b4b5df7ed.mockapi.io/users')
            setItem(res.data);
            console.log(items);
        } catch (e) {
            alert(e)
        }
    }

    const addUser = async (e) => {
        e.preventDefault()
        const payload = { name: userName }
        try {
            // const res = await axios.post('http://localhost:3001/users', payload);
            const res = await axios.post('https://6443f21e466f7c2b4b5df7ed.mockapi.io/users', payload);
            setItem([...items, res.data]);
            setUserName('');
            console.log("user added successfully");
        } catch (e) {
            alert(e)
        }
    }

    const removeUser = async (id) => {
        try {
            // const res = await axios.delete(`http://localhost:3001/users/${id}`);
            const res = await axios.delete(`https://6443f21e466f7c2b4b5df7ed.mockapi.io/users/${id}`);
            console.log(res, 'Item successfully deleted.');
            getUsers();
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        console.log(items);
    }, [items])


    return (
        <div className="container mt-2">
            <h2>React HTTP Post Request Example</h2>

            {/* <button onClick={getUsers} className="btn btn-warning my-5">
                Get users
            </button> */}

            <form onSubmit={addUser}>
                <div className="mb-2 mt-3">
                    <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        onChange={(event) => {
                            setUserName(event.target.value)
                        }}
                        value={userName}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Create
                </button>
            </form>

            <ul className="list-group">
                {items.map((x) => {
                    return (
                        <li
                            className="list-group-item d-flex justify-content-between align-items-start"
                            key={x.id}
                        >
                            <div className="ms-2 d-flex gap-5 me-auto">
                                {/* <div className="fw-bold">{x.userName}</div> */}
                                <div className="fw-bold">{x.name}</div>
                                <button className="remove btn btn-danger" onClick={() => removeUser(x.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}