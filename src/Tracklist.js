import React from "react";
import Track from "./Track";
function Tracklist({songResult,manipulatePlaylist}){
    return(
        <>
            {songResult.map((song) => {
                return(
                    <Track key={song.id} id={song.id} songName={song.songName} artist={song.artist} album={song.album} manipulatePlaylist={manipulatePlaylist} sign="+" />
                )
            })}
        </>
       
    )
}

export default Tracklist;