import React, {useState,useEffect} from "react";

import HomeBar from "./HomeBar";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import Playlist from './Playlist.js'

import styles from './App.module.css';

function App(){
  return(
    <div className={styles.container}>
      <HomeBar/>
      <div> 
        <SearchBar/>
      </div>
      <div className={styles.mainContainer}>
        <SearchResult />
        <Playlist />
      </div>
      
    </div>
  )
}

export default App;