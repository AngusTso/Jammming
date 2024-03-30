import React from "react";
import styles from './SearchBar.module.css';

function SearchBar(){
    return(
        <div className={styles.div}>
            <input type="text" className={styles.inputField} />
            <button className={styles.searchButton}>Search</button>
        </div>
    )
}

export default SearchBar;