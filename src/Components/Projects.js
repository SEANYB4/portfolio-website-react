import React, { useState, useEffect } from "react";
import Card from './Card.js';


const Projects = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch("./projects.json")
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log(data);
            })
            .catch(error => console.log(error));
    }, []);

    
    return (

        <div id="projects">
            {Object.keys(data).map(key => (
                <Card title={key.title}/>
            ))}
        </div>
    )

}

export default Projects;