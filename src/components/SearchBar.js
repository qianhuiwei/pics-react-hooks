import './SearchBar.css';
import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label for="term">Enter Search Term</label>
                <input id="term" value={term} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default SearchBar;