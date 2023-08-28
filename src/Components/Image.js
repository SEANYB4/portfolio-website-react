import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../Styles/image.css";



const Image = ({image, className, path}) => {

    const [loaded, setLoaded] = useState(false);
    const handleLoad = () => {
        setLoaded(true);
    }
    return (
        <Link to={path}>
        <img src={image} className={`Image${loaded ? '-loaded' : ''}, ${className}`} onLoad={handleLoad} alt=""></img>
        </Link>
    )
}

export default Image;