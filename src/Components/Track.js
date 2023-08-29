import React from "react";
import '../Styles/track.css';



const Track = ({title, track}) => {


    return (

        <div className="track">
            <h1>{title}</h1>
            <audio controls src={track} type="audio/mpeg"></audio>
        </div>
    )
}


export default Track;