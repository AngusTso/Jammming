import React from "react";
import styles from './Track.module.css';

function Track({songName,artist,album}){
    return(
        <>
            <div className={styles.trackContainer}>
            <div>
                <h2 className={styles.h2}>{songName}</h2>
                <h3 className={styles.h3}>{artist} | {album}</h3>
            </div>
            <button className={styles.button}>+</button>
            </div>
            <hr style={{color : 'white'}}/>
        </>
    )
}

export default Track;