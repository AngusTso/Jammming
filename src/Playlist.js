import React from "react";
import styles from './Playlist.module.css';

function Playlist(){
    return(
        <div className={styles.playlistContainer}>
            <h2>Playlist</h2>
            <button className={styles.button}>Save</button>
        </div>
    )
}

export default Playlist;