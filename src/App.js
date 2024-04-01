import React, {useState,useEffect} from "react";

import HomeBar from "./HomeBar";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import Playlist from './Playlist.js'

import styles from './App.module.css';

function App(){
  const [songResult , setSongResult] = useState([]);
  function handleSearchResult(result){
    setSongResult(result)
  }
  return(
    <div className={styles.container}>
      <HomeBar/>
      <div> 
        <SearchBar handleSearchResult={handleSearchResult}/>
      </div>
      <div className={styles.mainContainer}>
        <SearchResult songResult={songResult} />
        <Playlist/>
      </div>
    </div>
  )
}

export default App;