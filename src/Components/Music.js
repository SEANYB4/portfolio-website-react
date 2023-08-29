import React from "react";
import ClydeBuilt from '../Audio/Clyde Built.wav';
import Track2 from '../Audio/231342.mp3';
import SoundFilm from "./SoundFilm";
import Track from "./Track";
import '../Styles/music.css';

const Music = () => {

 
    return (

        <div className="musicContainer">

            <h1>Tracks</h1>
            <div className="tracks">
                
                <Track title="Clyde Built" track={ClydeBuilt}></Track>
                
                <Track title="231342" track={Track2}></Track>
                    
            </div>

            
            <h1>Sound Films</h1>
            <div className="soundFilms">

                <SoundFilm title="ComputerMagic" youtubeId="wR6oSACFst4"></SoundFilm>
                
                <SoundFilm title="Lessons from the Rain" youtubeId="Iu1DmNHY7_4"></SoundFilm>

            </div>
        </div>
    )
}
export default Music;