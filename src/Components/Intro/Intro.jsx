import React from 'react'
import './intro.css'
import Github from '../../img/git2.png';
import LinkedIn from '../../img/li3.png';
import Instagram from '../../img/inst2.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png'; 
import thumbup from '../../img/thumbup.png'; 
import crown from '../../img/crown.png'; 
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';


export const Intro = () => {
  return (
      <div className="intro">
          
          {/* leftside */}
          <div className="i-left">
              <div className="i-name">
                  <span>
                      Hellow,I AM 
                  </span>
                  <span>Chirantha</span>
                  <span>Welcome to my portfolio! I'm Chirantha Senarathna, a passionate full-stack developer with expertise in Laravel,
                      React.js, and JavaScript. With a strong foundation in web development, I create seamless and responsive web applications
                      that combine functionality and aesthetics. My dedication to crafting clean, efficient code ensures optimal user experiences.
                      Whether it's building dynamic web apps, implementing complex back-end solutions, or designing captivating user interfaces,
                      I'm committed to delivering top-notch results. Explore my work and discover how I can turn your ideas into innovative digital
                      solutions. Let's collaborate and bring your vision to life!</span>
              </div>
              <button className="button i-button">Hire Me...</button>
             <div className="i-icons">
                  <img src={Github} alt="" />
                  <img src={LinkedIn} alt="" />
                  <img src={Instagram} alt="" />  

              </div>
          </div>
           
              

          {/* rightside */}
          <div className="i-right">
              <img src={Vector1} alt="" />
              <img src={Vector2} alt="" />
              <img src={boy} alt="" />
              <img src={ glassesimoji} alt="" />
              <div style={{top:'2%',left:'70%'}}> 
                  <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
              </div>
              <div style={{top:'18.2rem',left:'2rem'}}>
                  <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
              </div>
              {/* blur divs */}
              <div className='blur' style={{ backgroun: 'black' }}></div>
              <div className='blur' style={{
                  background: '#d0d2f5',
                  top: '17rem',
                  width: 'rem',
                  height: 'rem',
                  left:'-9rem'
            }}></div>
          </div>
</div>  )
}
