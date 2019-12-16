import React from 'react';

import Slogan from '../../../assets/slogan.png';

const About = () => (
    <div className="about-wrapper">
        <img id="slogan" src={Slogan} alt="slogan" />
        <div className="about-text">
            <p>
                E-Week is a week-long celebration highlighting the contributions to society that engineers make.
            </p>
            <br />
            <p>
                Started in 1951 by the National Society of Professional Engineers, this particular week 
                in February is observed by a plethora of professional and academic socieities as well 
                as corporations and government agencies.
            </p>
            <br />
            <p>
                For students here at Illinois, there are community and competitive events, guest speakers, and food. 
                Register an account for a 5 or 10 man team to participate in the festivites and competitions. 
                Awards, prizes, and bragging rights await!
            </p>
        </div>
    </div>
  );
  
  export default About;
  