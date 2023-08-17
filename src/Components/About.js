import React from "react";
import '../Styles/about.css';


const About = () => {


    return (

        <div className="about_page_container">
            <div className="about_container">
            <h1>About</h1>
            <p>Hello, I'm Sean Bain.</p>
            <p>I am a full stack web developer from Scotland.</p>
            <p>I also enjoy game and audio programming, as well as making music.</p>
            <p>I am always eager to take on a challenge,</p>
            <p>so feel free to reach out and let me know about your project.</p>
            <p>Looking forward to working with you...</p>
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
                <form>
                    <label for='name'>Name</label>
                    <br></br>
                    <input name='name' type='text'></input>
                    <br></br>
                    <br></br>
                    <label for="email">Email</label>
                    <br></br>
                    <input name='email' type='textarea'></input>

                </form>
                <p>Using this form will send an email directly to my personal address,</p>
                <p>or alternatively, you can contact me at artemis45566@gmail.com</p>
            </div>

        </div>

        
    )
}


export default About;