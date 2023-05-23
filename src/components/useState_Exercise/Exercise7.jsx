import { useState } from "react"

const Exercise7 = () => {
    const [name, setName] = useState({ firstname: "Sherlock", lastName: "Holmes" });

    const [people, setPeople] = useState([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Bob Johnson" }
    ]);

    const handleChange = () => {
        setName({ ...name, firstname: "Enola" });
    }

    const updateName = (id, newFirstName) => {

        setPeople(() => {
            const updatedPeople = people.map(person => {
                if (person.id === id) {
                    return { ...person, name: newFirstName };
                }
                return person;
            });

            return updatedPeople;
        });
    };

    return (
        <div className="shadow-lg bg-warning p-4">
            <h1>Exercise 7: state with object</h1>

            <h4 className="bg-light">
                My name  first name is {name.firstname} and last name is {name.lastName}
            </h4>

            <button className="btn btn-dark" onClick={handleChange}> Click me </button>

            {/* {people.map(person => (
                <p key={person.id}>{person.id}: {person.name} <button onClick={() => updateName(person.id, "New Name")}>
                    Update
                </button>
                </p>
            ))} */}

            {people.map((person) => (
                <h5 key={person.id} >
                    {person.id}: {person.name}
                    <button onClick={() => updateName(person.id, "New Name")}>
                        Update
                    </button>
                </h5>
            ))}

        </div>
    )
}

export default Exercise7