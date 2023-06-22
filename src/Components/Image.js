import React, { useState } from "react";
import "../Styles/image.css";

const Image = ({image, className}) => {

    const [loaded, setLoaded] = useState(false);
    const handleLoad = () => {
        setLoaded(true);
    }
    return (
        
        <img src={image} className={`Image${loaded ? '-loaded' : ''}, ${className}`} onLoad={handleLoad}></img>
        
    )
}

export default Image;