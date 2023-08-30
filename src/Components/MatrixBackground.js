import React, { useEffect } from "react";

import "../Styles/matrix.css";

const MatrixBackground = () => {


    useEffect(() => {

        const matrixContainer = document.querySelector('.matrix-background');

        // character set for matrix code effect
        const codeSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789量册髑镍贝睃森枧汐潍';

        // number of code elements to generate
        const numElements = 100;

        // generate code elements
        for (let i = 0; i < numElements; i++) {

            const codeElement = document.createElement('span');
            codeElement.textContent = codeSet[Math.floor(Math.random() * codeSet.length)];
            codeElement.style.cssText = `
            color: lightblue;
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${Math.random() * 2 + 1}rem;
            animation: matrix-effect ${Math.random() * 10 + 5}s linear infinite;
            opacity: ${Math.random()};
            pointerEvents: none;
            `;
            matrixContainer.appendChild(codeElement);
        }
    }, []);


    return (

        <div className="matrix-background">
            {/* {Matrix code effect elements} */}
        </div>
    );
};




export default MatrixBackground;