import React, {useState,useEffect} from "react";
import styles from './SearchBar.module.css';


  
function SearchBar({token,handleSearchResult}){
    const [songName,setSongName] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if (isSubmit) {
            console.log("Performing search for:", songName);
            // Call Spotify API to search for the song
            //handleSearchResult (result)
            fetchData(songName);
            setIsSubmit(false); // Reset isSubmit after performing the search
        }
    }, [songName, isSubmit]);
    
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${songName}&type=track&limit=50&market=HK`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const jsonData = await response.json();
          handleSearchResult(jsonData.tracks.items)
        } else {
          throw new Error('Error: ' + response.status);
        }
      } catch (error) {
        console.log(error);
      }
    };

    
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