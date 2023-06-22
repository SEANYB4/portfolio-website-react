import React, { useState, useEffect } from "react";
import musicData from "../music.json";

const Music = () => {

    const [tracks, setTracks] = useState([])

    useEffect(() => {

        setTracks(musicData)
    }, [])


    return (

        <div id="music">
            {tracks.map(track => {
                <p>{track.title}</p>
            })}
        </div>


    )
}
export default Music;