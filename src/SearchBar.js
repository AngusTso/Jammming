import React, {useState,useEffect} from "react";
import styles from './SearchBar.module.css';

const songList = [{
    id: 1111,
    songName: 'Happy',
    artist: 'Pharell',
    album: 'Happy'
  },{
    id: 11311,
    songName: 'jogging',
    artist: 'Minju',
    album: 'Minju Love Song'
  },{
    id: 11511,
    songName: 'Fly',
    artist: 'Marshmellow',
    album: 'MarshmellowFirst'
  },{
    id: 141511,
    songName: 'Talk',
    artist: 'Angus',
    album: 'Angus Single'
  }]
  
function SearchBar({handleSearchResult}){
    const [songName,setSongName] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if (isSubmit) {
            console.log("Performing search for:", songName);
            // Call Spotify API to search for the song
            //handleSearchResult (result)
            handleSearchResult(songList)
            setIsSubmit(false); // Reset isSubmit after performing the search
        }
    }, [songName, isSubmit]);

    function handleChange(e){
        setSongName(e.target.value);
    }

    function handleSubmit(){
        setIsSubmit(true); // Set isSubmit to true when the form is submitted
    }

    return(
        <div className={styles.div}>
            <input type="text" className={styles.inputField} value={songName} onChange={handleChange} placeholder="Enter a song name to Search" />
            <button className={styles.searchButton} onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default SearchBar;