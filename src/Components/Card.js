import React from "react";
import "../Styles/card.css";
import CountdownImage from '../Images/countdown.png';
import WarriorsOfXuImage from '../Images/warriors_of_xu.png';
import GazetteerImage from '../Images/gazetteer.png';
import CyberSLavesImage from '../Images/cyber_slaves.png';
import MathSorcererImage from '../Images/math_sorcerer.png';
import AsteroidInvadersImage from '../Images/ateroid_invaders.jpeg';

const handleClick = (link) => {

    window.location.href = link;
}

const Card = ({ title, description, image, link, technologies }) => {
    let imageURL;
    if (image === 'countdown') {
        imageURL = CountdownImage;
    } else if (image === 'warriors_of_xu') {
        imageURL = WarriorsOfXuImage;
    } else if (image === 'gazetteer') {
        imageURL = GazetteerImage;
    } else if (image === 'cyber_slaves') {
        imageURL = CyberSLavesImage;
    } else if (image === 'math_sorcerer') {
        imageURL = MathSorcererImage;
    } else if (image === 'asteroid_invaders') {
        imageURL = AsteroidInvadersImage;
    }
    
    return (

        <div className="container">
            <h1>{title}</h1>
            <img src={imageURL} className="card_image" onClick={() => handleClick(link)} alt=""></img>
            <p>{description}</p>
            <h6>Technologies Used:</h6>
            <p>{technologies}</p>
            <a href={link}>Go to project...</a>
        </div>
        

    )
}


export default Card;