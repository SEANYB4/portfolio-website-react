import React from "react";
import '../Styles/about.css';


const About = () => {


    return (

        <div className="about_page_container">
            <div className="about_container">
            <h1>About</h1>
            <p>Hello I am Sean Bain</p>
            <p>I am a full stack web developer from Scotland.</p>
            <p>I also enjoy game and audio programming.</p>
            <h3>Qualifications</h3>
            <ul>
                <li>MSc Computer Science - University of York - Pending</li>
                <li>MDes Sound for the Moving Image - Glasgow School of Art 2020</li>
                <li>BA Popular Music - Edinburgh Napier University 2018</li>
            </ul>

            <h3>Addtional Programming Training</h3>
            <ul>
                <li>Codecademy</li>
                <li>Boot.dev</li>
                <li>Leetcode</li>
            </ul>

            <h3>Programming Languages and Frameworks</h3>
            <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Golang</li>
            </ul>

            <div className="download_button">
                <p>Download my CV here!</p>
            </div>
            
            </div>


            <div className="contact_container">
                <h1>Contact</h1>
            </div>

        </div>

        
    )
}


export default About;