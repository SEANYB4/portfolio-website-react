import React, { useState, useEffect } from "react";
import musicData from "../music.json";

const Music = () => {

    const [tracks, setTracks] = useState([])

    useEffect(() => {

        setTracks(musicData)
    }, [])


    return (

        <div id="music">
            <p>Clyde Built</p>
            <audio controls src="../Audio/Clyde Built.wav" type="audio/mpeg"></audio>
        </div>


    )
}
export default Music;