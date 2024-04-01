import React,{useState} from "react";
import styles from './Playlist.module.css';
import Track from "./Track";

function Playlist(){
    const [playlistName, setPlaylistName] = useState("");
    const [playlist , setplaylist] = useState([{
        id: 1111,
        songName: 'Happy',
        artist: 'Pharell',
        album: 'Happy'
    },{
        id: 11311,
        songName: 'jogging',
        artist: 'Minju',
        album: 'Minju Love Song'
    }]);

    return(
        <>
            <div className={styles.playlistContainer}>
                <input type="text" className={styles.input} value={playlistName}/>
                <button className={styles.button}>Save to Spotify</button>
                {playlist.map(song => {
                return <Track key={song.id} songName={song.songName} artist={song.artist} album={song.album}v/>
                })}
            </div>
            
        </>
    )
}

export default Playlist;