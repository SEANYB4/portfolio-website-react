import React, { useState, useEffect } from "react";
import Card from './Card.js';
import projectData from '../projects.json';


const Projects = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(projectData);
    }, []);

    
    return (

        <div id="projects">
            {data.map(item => (
                <Card title={item.title} description={item.description} imageURL={item.imageURL} link={item.link} key={item.title}/>
            ))}
        </div>
    )

}

export default Projects;