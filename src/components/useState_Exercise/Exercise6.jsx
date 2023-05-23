// Create an input field for users to type in their search query

// Display the list of items and filter them based on the user's search input

// Use the useState hook to manage the search input state

import { useState } from "react";

const Exercise6 = () => {
    const items = ['Apple', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape'];
    // const [items, setItems] = useState(['Apple', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape']);

    // to store search quey
    const [search, setSearch] = useState('');

    // to store filtered array
    const [result, setResult] = useState(items);


    const handleSearchQuery = (event) => {
        // setting the query string to 'search' useState
        const query = event.target.value.toLowerCase();
        setSearch(query);

        // filtering the array based on search query
        const filteredItems = items.filter((item) => item.toLowerCase().includes(query));

        // setting filtered array to 'result'
        setResult(filteredItems);
    }

    return (
        <div>
            <h1>Search Filter</h1>
            <input type="text" value={search} onChange={handleSearchQuery} />

            <ul>
                {
                    result && result.map((result, index) => (
                        <li key={index}>
                            {result}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Exercise6