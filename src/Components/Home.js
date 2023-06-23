import React from "react";
import Image from "./Image.js";
import Castle from "../Images/ghost_castle.png";
import Monk from "../Images/hacker_monk.png";
import Tree from "../Images/cherry_tree.png";
import Blossom from "../Images/blossom.png";
import Cables from "../Images/cables.png";
import Laptop from "../Images/laptop.png";
import Synthesizer from "../Images/synthesizer.png";
import Server from "../Images/server.png";
import "../Styles/home.css";



const Home = () => {

    return (
        <div className="image-container">
            <Image image={Castle} className='castle'></Image>
            <Image image={Monk} className='monk'></Image>
            <Image image={Tree} className='tree'></Image>
            <Image image={Cables} className='cables'></Image>
            <Image image={Laptop} className='laptop'></Image>
            <Image image={Synthesizer} className='synthesizer'></Image>
            <Image image={Server} className='server'></Image>
            <Image image={Blossom} className='blossom'></Image>
            <Image image={Blossom} className='blossom2'></Image>
            <Image image={Blossom} className='blossom3'></Image>
            <Image image={Blossom} className='blossom4'></Image>
            <Image image={Blossom} className='blossom5'></Image>
            
            <h1>Hey, I'm SEANYB4 :)</h1>
            <h2>Computer Programmer and Musician</h2>
        </div>
    )
}


export default Home;