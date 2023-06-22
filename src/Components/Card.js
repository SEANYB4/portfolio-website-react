import React from "react";
import Image from "../Images/computer_girl.jpg";
import "../Styles/card.css";


const handleClick = () => {

    console.log('clicked');
}

const Card = ({ title, description }) => {



    return (

        <div className="container">
            <h1>{title}</h1>
            <img src={Image} className="card_image" onClick={handleClick} alt="Project photo"></img>
            <p>{description}</p>
        </div>
        

    )
}


export default Card;