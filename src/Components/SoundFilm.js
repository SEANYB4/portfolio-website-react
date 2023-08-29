import React from "react";
import '../Styles/soundFilm.css';
import YouTube from 'react-youtube';


const SoundFilm = ({youtubeId, title}) => {


    return (

        <div className="soundfilm">
            <h1>{title}</h1>
            <YouTube videoId={youtubeId} className="video"/>
        </div>
    )
}


export default SoundFilm;