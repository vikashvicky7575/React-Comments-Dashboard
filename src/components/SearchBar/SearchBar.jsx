import React from 'react';
import styles from "./SearchBar.module.css";

// paasing the data using props
const SearchBar = ({ searchText, onSearch }) => {
    return (
        <>
            {/* Search Filter Heading */}
            <div className={styles.headerRight}>
                <h3>Search Filter</h3>
            </div>

            <div className={styles.searchContainer}>
                {/* Search Input */}
                <input
                    className={styles.input}
                    type='text'
                    placeholder='Search name or email'
                    value={searchText}
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
        </>
    )
}

export default SearchBar