import React from "react";
import '../Styles/about.css';
import CV from '../Sean Bain CV.pdf';


const DownloadButton = () => {

    const handleDownload = () => {

        const link = document.createElement("a");
        link.href = CV;
        link.download = "Sean_Bain_CV.pdf";
        link.click();

       
    }



    return (

        <div className="download_button" onClick={handleDownload}>
            <p>Download CV</p>
        </div>

    )



}


export default DownloadButton;