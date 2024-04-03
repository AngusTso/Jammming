import React from "react";
import styles from "./SearchResult.module.css";
import Tracklist from "./Tracklist";

function SearchResult({songResult,addToPlaylist}){
    return(
        <div className={styles.resultContainer}>
            <h2>Result</h2>
            <Tracklist songResult={songResult} manipulatePlaylist={addToPlaylist}/>
        </div>
    )
}

export default SearchResult;