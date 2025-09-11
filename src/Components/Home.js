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
import MatrixBackground from "./MatrixBackground.js";



const Home = () => {

    return (
        <div className="image-container">
            <MatrixBackground></MatrixBackground>
            <Image image={Castle} className='castle' path='/'></Image>
            <Image image={Monk} className='monk' path='/'></Image>
            <Image image={Tree} className='tree' path='/'></Image>
            <Image image={Cables} className='cables' path='/'></Image>
            <Image image={Laptop} className='laptop' path='/projects'></Image>
            <Image image={Synthesizer} className='synthesizer' path='/music'></Image>
            <Image image={Server} className='server' path='/about'></Image>
            <Image image={Blossom} className='blossom' path='/'></Image>
            <Image image={Blossom} className='blossom2' path='/'></Image>
            <Image image={Blossom} className='blossom3' path='/'></Image>
            <Image image={Blossom} className='blossom4' path='/'></Image>
            <Image image={Blossom} className='blossom5' path='/'></Image>
            
            <h1 id="title1">Hey, I'm Sean</h1>
            <h2 id="title2">Computer Programmer and Musician</h2>
            
            
        </div>
    )
}


export default Home;