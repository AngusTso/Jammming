import React, {useState,useEffect} from "react";

import HomeBar from "./HomeBar";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import Playlist from './Playlist.js'

import styles from './App.module.css';

//Todo: Implement get token and get used id
const token = 'BQC9RQCihi521AWEL3CF2mRfBDIkTXSzPB5ZsTII4-dMtIuvAhC_nBs3Gb-t0DdmYxn0tP-HlGQ0CXuZijohSDTVwV6pn4UtrFk0N6Y8eZXT35VJJc4';
const userId = "31ow3kd4fjz6orgfdh4kzofb7r6m"

function App(){
  const [songResult , setSongResult] = useState([]);
  const [playlistName , setPlaylistName] = useState("");
  const [saveToSpotify , setSaveToSpotify] = useState(false);
  const [playlist , setplaylist] = useState([]);

  useEffect(() => {
    if(saveToSpotify){
      createPlaylist();
      setplaylist([])
    }
  },[saveToSpotify]);

  const createPlaylist = async() => {
    const myPlaylist = {
      name:playlistName,
      description: "This playlist is created using Jammming",
      public: false
    };

    try{
      const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method:'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(myPlaylist)
        });

        console.log(JSON.stringify(myPlaylist));
        if (response.ok) {
          console.log('ok')
        } else {
          throw new Error('Error: ' + response.status);
        }
    }catch(e){
      console.log(e)
    }
  }
  //This is after searching Spotify and list result
  function handleSearchResult(result){
    const songResult = result.map(item => {
      try{
        return {
          id: item.id,
          songName: item.name,
          artist: item.artists[0].name ? item.artists[0].name : 'No name',
          album: item.album.name}
      }catch(e){
        console.log(e)
      }
     });
     setSongResult(songResult);
  }

  function handleChangePlaylistName(e){
    setPlaylistName(e.target.value)
  }

  function handleSubmitToSpotify(){
    setSaveToSpotify(true)
  }

  function addToPlaylist(obj){
    let ids = playlist.map(obj => obj.id);
    let isIdFound = ids.includes(obj.id);
    if(isIdFound){
      alert("Already in your custom playlist")
      return;
    }
    setplaylist(prev => [...prev,obj]);
  }

  function removefromPlaylist(obj){
    setplaylist(prev => prev.filter(prev => prev.id !== obj.id));
  }

  return(
    <div className={styles.container}>
      <HomeBar/>
      <div> 
        <SearchBar token={token} handleSearchResult={handleSearchResult}/>
      </div>
      <div className={styles.mainContainer}>
        <SearchResult songResult={songResult} addToPlaylist={addToPlaylist} />
        <Playlist playlist={playlist} handleChangePlaylistName={handleChangePlaylistName} playlistName={playlistName} handleSubmitToSpotify={handleSubmitToSpotify} removefromPlaylist={removefromPlaylist}/>
      </div>
    </div>
  )
}

export default App;