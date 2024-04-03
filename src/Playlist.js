import React,{useState} from "react";
import styles from './Playlist.module.css';
import Track from "./Track";

function Playlist({playlist,handleChangePlaylistName,playlistName,handleSubmitToSpotify,removefromPlaylist}){
    return(
        <>
            <div className={styles.playlistContainer}>
                <input type="text" className={styles.input} value={playlistName} onChange={handleChangePlaylistName}/>
                <button className={styles.button} onClick={handleSubmitToSpotify}>Save to Spotify</button>
                {playlist.map(song => {
                return <Track key={song.id} id={song.id} songName={song.songName} artist={song.artist} album={song.album} sign="-" manipulatePlaylist={removefromPlaylist}/>
                })}
            </div>
            
        </>
    )
}

export default Playlist;