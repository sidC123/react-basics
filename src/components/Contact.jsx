import { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const [userName, setUserName] = useState('');

    const getUsers = async () => {
        const res = await axios.get("https://6443f21e466f7c2b4b5df7ed.mockapi.io/users");
        console.log(res.data);
        setContacts(res.data);
        console.log(contacts)
    }

    const addUser = async (e) => {
        e.preventDefault();
        const payload = { name: userName };
        const res = await axios.post("https://6443f21e466f7c2b4b5df7ed.mockapi.io/users", payload);
        setContacts([...contacts, res.data]);
        setUserName('');
    }

    const deleteContact = async (id) => {
        const res = await axios.delete(`https://6443f21e466f7c2b4b5df7ed.mockapi.io/users/${id}`);
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        console.log("new user", userName)
    }, [userName])


    return (
        <div>
            <h1>My Contacts</h1>

            <form onSubmit={addUser}>
                <input
                    type="text"
                    name="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Name"
                />
                <button type="submit" className="btn btn-success">ADD USER</button>
            </form>

            {
                contacts.map((person) => (
                    <h3 className="bg-light border" key={person.id}>
                        {person.name}

                        <button className="btn btn-danger" onClick={() => deleteContact(person.id)}>Remove this</button>
                    </h3>
                ))
            }

        </div>
    )
}

export default Contact