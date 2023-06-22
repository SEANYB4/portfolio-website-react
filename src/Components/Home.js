import React from "react";
import Image from "./Image.js";
import Castle from "../Images/ghost_castle.png";
import Monk from "../Images/hacker_monk.png";
import Tree from "../Images/cherry_tree.png";
import Blossom from "../Images/blossom.png";
import "../Styles/home.css";



const Home = () => {

    return (
        <div className="image-container">
            <Image image={Castle} className='castle'></Image>
            <Image image={Monk} className='monk'></Image>
            <Image image={Tree} className='tree'></Image>
            <h1>Hey, I'm SEANYB4</h1>
        </div>
    )
}


export default Home;