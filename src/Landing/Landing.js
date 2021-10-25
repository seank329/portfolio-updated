import React from 'react';
import './landing.scss';
import rlogo from '../images/react-logo.png';
import nlogo from '../images/nodejs-logo.png';
import jslogo from '../images/js-logo.png';
import pslogo from '../images/ps-logo.png';
import alogo from '../images/angular-logo.png';
import clogo from '../images/css-logo.png';


export default function Landing(){
    return(

        <section className='Landing'>
            <div id="introHousing">
                <p id='intro'>Hello! I'm Sean, a full-stack developer.</p>
            </div>
            <div className="logoDivs">
                <img src={rlogo} alt="react-logo" width='200px' height='200px' id="reactLogo" /> 
            </div>
            <div className="logoDivs">
                <img src={nlogo} alt="node-logo" width='714px' height='200px' id="nodeLogo" /> 
            </div>
            <div className="logoDivs">
                <img src={jslogo} alt="js-logo" width='170px' height='150px' id="jsLogo"/>
            </div>
            <div className="logoDivs">
                <img src={pslogo} alt="ps-logo" width='200px' height='200px' id="psLogo" />
            </div>
            <div className="logoDivs">
                <img src={alogo} alt="a-logo" width='1280px' height='348px' id="angularLogo" />
            </div>
            <div className="logoDivs">
                <img src={clogo} alt="cs-logo" width='400px' height='400px' id="cssLogo" />
            </div>
        </section>
    )

}