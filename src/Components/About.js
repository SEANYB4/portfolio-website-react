import React from "react";
import '../Styles/about.css';
import Contact from "./Contact";
import DownloadButton from "./DownloadButton";

const About = () => {


    return (

        <div className="about_page_container">
            <div className="about_container">
            <h1 className="about-heading">About</h1>
            <p>Hello, I'm Sean Bain.</p>
            <p>I am a full stack web developer from Scotland.</p>
            <p>I also enjoy game development and studying for cybersecurity certifications, as well as making music.</p>
            <p>I am always eager to take on a challenge,</p>
            <p>so feel free to reach out and let me know about your project.</p>
            <p>Looking forward to working with you...</p>
            <h3>Qualifications</h3>
            <ul>
                <li>MSc Computer Science - University of York - Pending</li>
                <li>MDes Sound for the Moving Image - Glasgow School of Art 2020</li>
                <li>BA Popular Music - Edinburgh Napier University 2018</li>
            </ul>

            <h3>Certifications</h3>
            <ul>
                <li>CEH Certified Ethical Hacker v13</li>
               
            </ul>

            <h3>Programming Languages and Frameworks</h3>
            <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C++</li>
            </ul>

            <DownloadButton></DownloadButton>
            
            </div>


            <Contact></Contact>

        </div>

        
    )
}


export default About;