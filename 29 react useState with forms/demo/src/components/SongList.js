import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [song, setSong] = useState([
        {title:"song1", id:1},
        {title:"song2", id:2},
        {title:"song3", id:3},
    ])
    const addSong = (title)=>{
        setSong([...song, {title:title, id: uuidv4()}])
    }
    return (
        <div class="song-list">
            <ul>
                {song.map(song=>{
                    return(
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <button onClick={addSong}>Add a song</button>
            <NewSongForm addSong={addSong}/>
        </div>
    );
}
 
export default SongList;