import React from 'react'
import './services.css'
import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble  from '../../img/humble.png';
import Card from '../Cards/Card';
import Resume from './Resume.pdf'



function Services() {
    return (
        <div className="services">
            {/* left-side */}
         

            <div className="awesome">
                   <span>My Awesome</span>
            <span>Services</span>
            <span>
                Explore my services: I offer expert web development using <br />Laravel, React.js, and JavaScript.
                From creatingcustom web applications to <br />designing captivating user interfaces,
                I provide comprehensive solutions to <br />meet your digital needs.
                With a commitment to clean code and efficiency, <br />I'll bring your projects to life and ensure their success.
                </span>
                <a href={Resume} download><button className="button s-button">Download Cv</button></a>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>
            {/* right-side */}
            <div className="cards">
                <div style={{left:'14rem'}}>
                    <Card
                        emoji={Heartemoji}
                        heading={'design'}
                        detail={ 'Figma,Photoshop,XD,sketch'} />
                </div>

                {/* second-card */}
                <div style={{ top: "14rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={ 'Html,CSS,Javascript,React'} />

                </div>
                {/* thitrd-card */}
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={ 'XD,Figma,Sketch'} />

                </div>
                
            </div>
      </div>
      )
}

export default Services