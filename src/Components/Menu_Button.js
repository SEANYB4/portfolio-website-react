import React from "react";
import "../Styles/menu_button.css";
import { Link } from 'react-router-dom';

const handleClick = () => {
    console.log("Menu Click");
}

const menuButton = ({title, link}) => {
    return (
        <div className="menu_button" onClick={handleClick}>
            <Link to={link}><h3>{title}</h3></Link>
        </div>
    )
}

export default menuButton;