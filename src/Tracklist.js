import React from "react";
import Track from "./Track";
function Tracklist({songResult}){
    return(
        <>
            {songResult.map((song) => {
                return(
                    <Track key={song.id} songName={song.songName} artist={song.artist} album={song.album}v/>
                )
            })}
        </>
       
    )
}

export default Tracklist;