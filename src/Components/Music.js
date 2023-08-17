import React, { useState, useEffect } from "react";
import musicData from "../music.json";
import ClydeBuilt from '../Audio/Clyde Built.wav';
import Track2 from '../Audio/231342.mp3';

const Music = () => {

    const [tracks, setTracks] = useState([])

    useEffect(() => {

        setTracks(musicData)
    }, [])


    return (

        <div id="music">
            <h2>Tracks</h2>
            <p>Clyde Built</p>
            <audio controls src={ClydeBuilt} type="audio/mpeg"></audio>

            <br></br>
            <br></br>

            <p>231342</p>
            <audio controls src={Track2} type="audio/mpeg"></audio>

            <br></br>

            <h2>Sound Films</h2>
            <iframe
                src="https://www.bilibili.com/video/BV1kM4y1d7DU/?spm_id_from=333.999.0.0"
                title="YouTube video player"
                ></iframe>
        </div>


  

    )
}
export default Music;