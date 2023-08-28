import React from "react";
import "../Styles/card.css";
import CountdownImage from '../Images/countdown.png';
import WarriorsOfXuImage from '../Images/warriors_of_xu.png';
import GazetteerImage from '../Images/gazetteer.png';
import CyberSLavesImage from '../Images/cyber_slaves.png';

const handleClick = () => {

    console.log('clicked');
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
    }
    
    return (

        <div className="container">
            <h1>{title}</h1>
            <img src={imageURL} className="card_image" onClick={handleClick} alt=""></img>
            <p>{description}</p>
            <h6>Technologies Used:</h6>
            <p>{technologies}</p>
            <a href={link}>Go to project...</a>
        </div>
        

    )
}


export default Card;